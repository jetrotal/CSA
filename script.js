var hash = decodeURI(window.location.hash.substring(1)),
    cmdList, currCmd,
    allCmd = document.getElementById("allcmd"),
    content = document.getElementById("content"),
    title = document.getElementById("title");

var DB = {};
var tpc_commands = {};
var vanilla = {};
var gen = 0;

var _sep = ['\$prefix\$','\$suffix\$',]

function init(){
fetch('RPG_RT.edb')
    .then(response => response.text())
    .then(text => CollectEvents(text));
}

function CollectEvents(text) {
    text = text.replace(/  /gi, "\u2800 ");
    DB = xmlToJson.parse(text);
    DB.LDB.Database.commonevents.CommonEvent.forEach(genEventsList);
    updateIndent(vanilla);
    main();

}

function genEventsList(a) {
    let { EventCommand } = a.event_commands;
    EventCommand = buildHierarchy(EventCommand, ["indent", "code"]);
  
    let lastElement = EventCommand.find(item => item.string === "//TPC_snippet");
    tpc_commands[a.name] = lastElement ? joinObj(lastElement.children, "string") : "";
  
    vanilla[a.name] = EventCommand;
  }
  
  function joinObj(a, attr) {
    var out = a.reduce(function(acc, item) {
      var value = item[attr];
      if (typeof value === 'object') value = JSON.stringify(value);
      if (value && value !== "{}") acc.push("\n " + value);
  
      return acc;
    }, []);
  
    return out.join("");
  }
  

function formatTPCArr(arr) {
    var result = [];

    var term = /\n @|\n s\[|\n v\[|\n t\[|\n gs\[|\n gv\[|\n gt\[/gi; //if TPC commands snippet has "\n @" or "\n s[" or "\n v[" or "\n t[" or "\n gs[" or "\n gv[" or "\n gt[" 

    var prefix = arr.match(term)

    arr = arr.split(term).filter(n => n);

    arr.map(function(el, ind) {
        //console.log(el)
   
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
    
    document.getElementById('content').innerHTML = document.getElementById('content').innerHTML.replaceAll(_sep[1],"</a>").replaceAll(_sep[0],"<a href='javascript:void(0)' onclick='showBin(this.innerText)'>")
}

function generateHTML(el, ind) {
    if (gen == 0)   updateParams(vanilla), gen = 1;

   if (ind in vanilla[currCmd])
        var vanHTML = JSON.stringify(vanilla[currCmd][ind], null, "\u2800 ").split("\n").join("<br>");
    else 
        vanHTML = JSON.stringify(vanilla[currCmd], null, "\u2800 ").split("\n").join("<br>");

    
    content.innerHTML += `
    <tr>
    <td id="tpc_${ind}" >${el.split("\n").join("<br>").replace(/\u2800/gi,"&nbsp; ")}</td>
    <td id="van_${ind}">${vanHTML.replace(/\u2800/gi,"&nbsp; ")}</td>
    </tr>
    `;


    let ind2 = ind > 0 ? ind - 1 : 0
 
    diffCheck(document.getElementById("tpc_" + ind), document.getElementById("tpc_"+ ind2)); 
    diffCheck(document.getElementById("van_" + ind), document.getElementById("van_"+ ind2));
    updateIndent(vanilla);
  
   // content.innerHTML = content.innerHTML.replaceAll("xxxegua","</a>").replaceAll("xxegua","<a href='javascript:void(0)' onclick='showBin(this.innerText)'>")

}

function diffCheck(b = "", a = "") {
    // Split the text into separate words and convert line breaks to HTML <br> tags
    x = a.innerText.split(" ").map(word => word.replaceAll("\n", " <br> "));
    y = b.innerText.split(" ").map(word => word.replaceAll("\n", " <br> "));
    
    // Iterate through the words in b
    for (let j = 0; j < y.length; j++) {
    // If the current word from b is not in a, highlight it
    if (!x.includes(y[j])) {
    y[j] = "<mark>" + y[j] + "</mark>";
    // If the words match, move on to the next word
} else if (x[j] == y[j]) {
  continue;

// If the next word in a matches the current word in b,
// highlight the current word in b and move on to the next word
} else if (x[j + 1] == y[j]) {
  y[j] = "<mark>" + y[j] + "</mark>";

// If the current word in a matches the next word in b,
// move on to the next word in both a and b
} else if (x[j] == y[j + 1]) {
  continue;

// If the next word in a matches the next word in b,
// highlight the current word in b and move on to the next word in both a and b
} else if (x[j + 1] == y[j + 1]) {
  y[j] = "<mark>" + y[j] + "</mark>";

// If the words do not match and there are no more matching words,
// stop the loop
} else {
  //break;
}
}

b.innerHTML = y.join(" ");
}

  


function main() {
    cmdList = Object.keys(tpc_commands);
    currCmd = cmdList.includes(hash) ? hash : cmdList[0],

        cmdList.forEach(prepareList)
    populateSelectBox();
    populateTable();
    allCmd.value = currCmd;
}

function prepareList(element) {

    tpc_commands[element] = formatTPCArr(tpc_commands[element]);
}

function jumpToInfo(){
    window.open("https://github.com/jetrotal/CSA/blob/main/info.md#-"+currCmd.replaceAll(" ","-").replaceAll("|","").replaceAll("(","").replaceAll(")","")+"-", '_blank').focus();

}


function showBin(num){
    document.getElementById('b4Bin').value = num;
    document.getElementById('allBin').value = toParam(toBin(parseInt(num) ));
}

function toBin(input, bits = 16) {
    // Convert the input number to a binary string
    let binary = input.toString(2);

    while (binary.length > bits) 
    bits = bits * 2;

    // Zero-pad the binary string to get a 16-bit value
    binary = binary.padStart(bits, "0");
    // while binary string is longer than the specified number of bits,
    // double the number of bits
   
   
    // Split the binary string into groups of four digits
    return binary.match(/.{1,4}/g).join(" ");
}

function toParam(binary) {
    // Split the binary string on the space character
    let binaryGroups = binary.split(" ");
  
    // Convert each group of four binary digits to a decimal value
    let decimalValues = binaryGroups.map(group => parseInt(group, 2));
  
    // Join the decimal values with a comma and return the result
    return decimalValues.reverse();
  }

  function updateIndent(obj) {
    for (let prop in obj) {
      if (prop === "indent" && !Number.isInteger(obj[prop]))
        obj[prop] -= 0.5;
      else if (typeof obj[prop] === "object") 
        updateIndent(obj[prop]);
      
    }
  }

  function updateParams(obj) {
    // Recursively traverse the given object
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "object") {
            updateParams(value);
        } else if (key === "parameters" && typeof value === "string") {
            // Split the string into an array of individual parameters
            const params = value.split(" ");
            // Convert each parameter into a HTM L link
            obj[key] = params.map(param => {
                return ` ${_sep[0]}${param}${_sep[1]} `;
                return `<a href='javascript:void(0)' onclick='showBin(this.innerText)'>${param} </a>`;
            });
        }
    }
    if(Array.isArray(obj.parameters))
    obj.parameters = obj.parameters.join(" ");
    console.log(obj.parameters)

}

  
  init();