var hash = decodeURI(window.location.hash.substring(1)),
    cmdList, currCmd,
    allCmd = document.getElementById("allcmd"),
    content = document.getElementById("content"),
    title = document.getElementById("title");

var DB = {};
tpc_commands = {};
vanilla = {};


fetch('RPG_RT.edb')
    .then(response => response.text())
    .then(text => CollectEvents(text));

function CollectEvents(text) {
    DB = xmlToJson.parse(text);
    DB.LDB.Database.commonevents.CommonEvent.forEach(genEventsList);
    init();

}



function genEventsList(a, b, c) {

    a.event_commands.EventCommand = buildHierarchy(a.event_commands.EventCommand, "indent");
    a.event_commands.EventCommand = buildHierarchy(a.event_commands.EventCommand, "code");

    var commentCMD = a.event_commands.EventCommand.length - 1;

    if (a.event_commands.EventCommand[commentCMD].string == "//TPC_snippet") {
        console.log(tpc_commands["TPC | If stringVar"]);
        // console.log(a.name, JSON.stringify(a.event_commands.EventCommand[commentCMD].children));
        tpc_commands[a.name] = joinObj(a.event_commands.EventCommand[commentCMD].children, "string");

        //a.event_commands.EventCommand = a.event_commands.EventCommand.slice(0, -1)
    }
    vanilla[a.name] = a.event_commands.EventCommand;
}

//joinObj(vanilla.Text[vanilla.Text.length - 1].children, "string")

function joinObj(a, attr) {
    var out = [];
    a[0][attr] = "\n " + a[0][attr]

    for (var i = 0; i < a.length; i++) {

        if (!a[i][attr]) a[i][attr] = "";
        out.push(a[i][attr]);
        // console.log(a[i][attr]);
    }

    return out.join("\n ");
}

function formatTPCArr(arr) {
    var result = [];

    var term = /\n @|\n s\[|\n v\[|\n t\[|\n gs\[|\n gv\[|\n gt\[/gi; //if TPC commands snippet has "\n @" or "\n s[" or "\n v[" or "\n t[" or "\n gs[" or "\n gv[" or "\n gt[" 

    var prefix = arr.match(term)

    arr = arr.split(term).filter(n => n);

    arr.map(function(el, ind) {
        return result.push(prefix[ind] + "" + el);
    });

    return result;
}


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


function populateSelectBox() {
    cmdList.forEach(function(item) {
        const optionObj = document.createElement("option");
        optionObj.textContent = item;
        allCmd.appendChild(optionObj);
    });

    allCmd.addEventListener("change", function() {
        currCmd = allCmd.value;
        window.location.hash = allCmd.value;
        populateTable();
    });

}

function populateTable() {
    content.innerHTML = "";
    tpc_commands[currCmd][0] ? tpc_commands[currCmd].forEach(generateHTML) : generateHTML(tpc_commands[currCmd], 0);
}

function generateHTML(el, ind) {
    try {
        var vanHTML = JSON.stringify(vanilla[currCmd][ind], null, "\u2800 ").split("\n").join("<br>");
    } catch (e) {
        vanHTML = JSON.stringify(vanilla[currCmd], null, "\u2800 ").split("\n").join("<br>");
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
    x = a.innerText.split("\n").join(" <br> ") //.split(",").join(" , ").split(":").join(" : ").split('""').join("xtexmpx").split('"').join(' " ').split("xtexmpx").join('""');
    y = b.innerText.split("\n").join(" <br> ") //.split(",").join(" , ").split(":").join(" : ").split('""').join("xtexmpx").split('"').join(' " ').split("xtexmpx").join('""');

    x = x.split(" ").filter(n => n);
    y = y.split(" ").filter(n => n);

    for (var i = j = 0; x[i] && y[j];) {
        if (-1 == x.indexOf(y[j]) && (y[j] = "<a class='highlight'>" + y[j] + "</a>"), x[i] == y[j]) i++, j++
            else {
                if (x[i] == y[j + 1]) /**console.log("Extra word : " + y[j]),/**/ y[j] = "<a class='highlight'>" + y[j] + "</a>", i++, j++
                    else {
                        if (x[i + 1] == y[j]) /**console.log("Skip word: " + x[i]),/**/ y[j] = "<a class='highlight'>" + y[j] + "</a>", i++, j++
                            else {
                                if (x[i + 1] == y[j + 1]) /**console.log("Diff word: " + y[j]),/**/ y[j] = "<a class='highlight'>" + y[j] + "</a>", i++, j++
                                    else break;

                            }
                    }
            }
    }
    // console.log(y);
    b.innerHTML = y.join(" ");
}


function init() {
    cmdList = Object.keys(tpc_commands);
    currCmd = cmdList.includes(hash) ? hash : cmdList[0],

        cmdList.forEach(prepareList)
    populateSelectBox();
    populateTable();
    allCmd.value = currCmd;
}

function prepareList(element) {
    // console.log(element)
    tpc_commands[element] = formatTPCArr(tpc_commands[element]);
    // if (vanilla[element] instanceof Array) {
    //     vanilla[element] = buildHierarchy(vanilla[element], "indent");
    //     vanilla[element] = buildHierarchy(vanilla[element], "code");
    // }
}