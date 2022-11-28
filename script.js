var cmdList = Object.keys(tpc_commands);

function formatTPC(a) {
    // return a.split('\n').join('').split(' .').join('.cSpacer.').split('  ').join('').split('.cSpacer.').join('.').split("}").join(" }").split(",").join(" , ").split('').join("")
}



function buildTPCArr(arr) {
    var result = [];
    arr = arr.split("\n @").filter(n => n);
    arr.map(function(el) {
        return result.push('@' + el);
    })
    return result;
}

function diffCheck(b = "", a = "") {

    x = a.innerText.split("\n").join(" <br> ").split(",").join(" , ").split(":").join(" : ").split('""').join("xtexmpx").split('"').join(' " ').split("xtexmpx").join('""') //formatTPC(a)
    y = b.innerText.split("\n").join(" <br> ").split(",").join(" , ").split(":").join(" : ").split('""').join("xtexmpx").split('"').join(' " ').split("xtexmpx").join('""') //a.split formatTPC(b)


    x = x.split(' ').filter(n => n);
    y = y.split(' ').filter(n => n);
    //console.log(x, y)

    var i = 0,
        j = 0;
    while (1) {
        if (!x[i] || !y[j]) break;

        if (x.indexOf(y[j]) == -1) {
            y[j] = "<span class='highlight'>" + y[j] + "</span>"

        }

        if (x[i] == y[j]) {
            i++;
            j++;
            continue;
        }



        if (x[i] == y[j + 1]) {
            console.log('Extra word : ', y[j]);
            y[j] = "<span class='highlight'>" + y[j] + "</span>"
            i++;
            j++ //= 2;
            continue;
        }

        if (x[i + 1] == y[j]) {
            console.log('Skip word: ', x[i]);
            i++ //= 2;
            j++;
            continue;
        }

        if (x[i + 1] == y[j + 1]) {
            console.log('Diff word: ', y[j]);
            y[j] = "<span class='highlight'>" + y[j] + "</span>"
            i++;
            j++;
            continue;
        }
        break;
    }
    console.log(y)
    b.innerHTML = y.join(" ");
}

function highlight(newElem, oldElem) {
    var oldText = oldElem.innerText,
        text = '';
    newElem.innerText.split('').forEach(function(val, i) {
        if (val != oldText.charAt(i))
            text += "<span class='highlight'>" + val + "</span>";
        else
            text += val;
    });
    newElem.innerHTML = text;
}



var allCmd = document.getElementById("allcmd")
var currCmd = cmdList[0]
var content = document.getElementById("content")
var title = document.getElementById("title")

cmdList.forEach(function(item) {
    const optionObj = document.createElement("option");
    optionObj.textContent = item;
    allCmd.appendChild(optionObj);
});

allCmd.addEventListener("change", function() {
    currCmd = allCmd.value;
    populateTable()
});

cmdList.forEach(element => tpc_commands[element] = buildTPCArr(tpc_commands[element]))

function populateTable() {

    //document.body.innerText = tpc_commands[currCmd].join("\n\n")
    content.innerHTML = ""

    //title.innerHTML = currCmd
    if (tpc_commands[currCmd][0]) tpc_commands[currCmd].forEach(generateHTML)
    else generateHTML(tpc_commands[currCmd], 0)
}

function generateHTML(el, ind) {
    try {
        var vanHTML = JSON.stringify(vanilla[currCmd][ind], null, "\t").split("\n").join("<br>")
    } catch (e) {

        var vanHTML = JSON.stringify(vanilla[currCmd], null, "\t").split("\n").join("<br>")
    }
    content.innerHTML += `
    <tr>
    <td id="tpc_${ind}" >${el.split("\n").join("<br>")}</td>
    <td id="van_${ind}">${ vanHTML }</td>
    </tr>
    `
    diffCheck(document.getElementById("van_" + ind), document.getElementById("van_0"));

    diffCheck(document.getElementById("tpc_" + ind), document.getElementById("tpc_0"));

}

populateTable()