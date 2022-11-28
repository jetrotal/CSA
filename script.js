var cmdList = Object.keys(tpc_commands),
    allCmd = document.getElementById("allcmd"),
    currCmd = cmdList[0],
    content = document.getElementById("content"),
    title = document.getElementById("title");

function formatTPCArr(arr) {
    var result = [];

    var term = /\n @|\n s\[|\n v\[|\n gs\[|\n gv\[/gi; //if TPC commands snippet has "\n @" or "\n s[" or "\n v[" or "\n gs[" or "\n gv[" 

    var prefix = arr.match(term)

    arr = arr.split(term).filter(n => n);

    arr.map(function(el, ind) {
        return result.push(prefix[ind] + "" + el);
    });

    return result;
}

/*
function buildHierarchy(items, mode = "indent") {
    const stack = [],
        result = [];

    let level = mode == "indent" ? -1 : 0;
    let floor = mode == "indent" ? 0 : 1;
    let ceiling = mode == "indent" ? 1.797693134862315E+308 : 2;

    for (let item of items) {
        var prop = mode == "indent" ? item.indent : parseInt(item.code.toString().substring(0, 1))
        if (prop > level) {
            stack.push(item);
            level = prop;
        } else {
            while (ceiling >= prop && prop <= level) {
                try {
                    level--;
                    if (level < floor) {
                        result.push(stack.pop());
                    } else {
                        console.log(level, stack[level], stack);
                        stack[level].children = stack[level].children || [];
                        stack[level].children.push(stack.pop());
                    }
                } catch (e) {}
            }

            stack[++level] = item;
        }
    }

    while (stack.length && stack.length > floor) {
        if (level > ceiling) break;
        level--;
        if (level < floor) {
            result.push(stack.pop());
        } else {

            console.log(level, stack[level]);
            stack[level].children = stack[level].children || [];
            stack[level].children.push(stack.pop());

        }
    }

    return result;
}
//*/

function buildHierarchy(items) {
    const stack = [],
        result = [];

    let level = -1;

    for (let item of items) {
        var ogIndent = item.indent;
        if (parseInt(item.code.toString().substring(0, 1)) == 2) item.indent = +.5;

        if (item.indent > level) {
            stack.push(item);
            level = item.indent;
        } else {
            while (item.indent <= level) {
                if (level == 0) {
                    result.push(stack.pop());
                    level = -1;
                } else {
                    const child = stack.pop();
                    const parent = stack[stack.length - 1];
                    parent.children = parent.children || [];
                    parent.children.push(child);
                    level = parent.indent;
                }
            }

            level = item.indent;
            stack.push(item);
        }
        // item.indent = ogIndent
    }

    while (stack.length > 0) {
        if (level == 0) {
            result.push(stack.pop());
        } else {
            const child = stack.pop();
            const parent = stack[stack.length - 1];
            parent.children = parent.children || [];
            parent.children.push(child);
            level = parent.indent;
        }
    }

    return result;
}


function populateList() {
    cmdList.forEach(function(item) {
        const optionObj = document.createElement("option");
        optionObj.textContent = item;
        allCmd.appendChild(optionObj);
    });

    allCmd.addEventListener("change", function() {
        currCmd = allCmd.value;
        populateTable();
    });

}

function populateTable() {
    content.innerHTML = "";
    tpc_commands[currCmd][0] ? tpc_commands[currCmd].forEach(generateHTML) : generateHTML(tpc_commands[currCmd], 0);
}

function generateHTML(el, ind) {
    try {
        var vanHTML = JSON.stringify(vanilla[currCmd][ind], null, "\t").split("\n").join("<br>");
    } catch (e) {
        vanHTML = JSON.stringify(vanilla[currCmd], null, "\t").split("\n").join("<br>");
    }

    content.innerHTML += `
    <tr>
    <td id="tpc_${ind}" >${el.split("\n").join("<br>")}</td>
    <td id="van_${ind}">${vanHTML}</td>
    </tr>
    `;

    diffCheck(document.getElementById("van_" + ind), document.getElementById("van_0"));
    diffCheck(document.getElementById("tpc_" + ind), document.getElementById("tpc_0"));

}

function diffCheck(b = "", a = "") {
    x = a.innerText.split("\n").join(" <br> ").split(",").join(" , ").split(":").join(" : ").split('""').join("xtexmpx").split('"').join(' " ').split("xtexmpx").join('""');
    y = b.innerText.split("\n").join(" <br> ").split(",").join(" , ").split(":").join(" : ").split('""').join("xtexmpx").split('"').join(' " ').split("xtexmpx").join('""');

    x = x.split(" ").filter(n => n);
    y = y.split(" ").filter(n => n);

    for (var i = j = 0; x[i] && y[j];) {
        if (-1 == x.indexOf(y[j]) && (y[j] = "<a class='highlight'>" + y[j] + "</a>"), x[i] == y[j]) i++, j++
            else {
                if (x[i] == y[j + 1]) console.log("Extra word : " + y[j]), y[j] = "<a class='highlight'>" + y[j] + "</a>", i++, j++
                    else {
                        if (x[i + 1] == y[j]) console.log("Skip word: " + x[i]), y[j] = "<a class='highlight'>" + y[j] + "</a>", i++, j++
                            else {
                                if (x[i + 1] == y[j + 1]) console.log("Diff word: " + y[j]), y[j] = "<a class='highlight'>" + y[j] + "</a>", i++, j++
                                    else break;

                            }
                    }
            }
    }
    console.log(y);
    b.innerHTML = y.join(" ");
}


function init() {

    cmdList.forEach(prepareList)
    populateList();
    populateTable();

}

init();

function prepareList(element) {
    console.log(element)
    tpc_commands[element] = formatTPCArr(tpc_commands[element]);
    if (vanilla[element] instanceof Array) {
        vanilla[element] = buildHierarchy(vanilla[element], "indent");
        vanilla[element] = buildHierarchy(vanilla[element], "code");
    }
}
