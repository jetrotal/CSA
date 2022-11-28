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
    console.log(arr, "me nota")

    arr.map(function(el, ind) {
        return result.push(prefix[ind] + "" + el);
    });

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
        if (-1 == x.indexOf(y[j]) && (y[j] = "<span class='highlight'>" + y[j] + "</span>"), x[i] == y[j]) i++, j++
            else {
                if (x[i] == y[j + 1]) console.log("Extra word : " + y[j]), y[j] = "<span class='highlight'>" + y[j] + "</span>", i++, j++
                    else {
                        if (x[i + 1] == y[j]) console.log("Skip word: " + x[i]), y[j] = "<span class='highlight'>" + y[j] + "</span>", i++, j++
                            else {
                                if (x[i + 1] == y[j + 1]) console.log("Diff word: " + y[j]), y[j] = "<span class='highlight'>" + y[j] + "</span>", i++, j++
                                    else break;

                            }
                    }
            }
    }
    console.log(y);
    b.innerHTML = y.join(" ");
}


function init() {

    cmdList.forEach(element => tpc_commands[element] = formatTPCArr(tpc_commands[element]));

    populateList();
    populateTable();

}

init();
