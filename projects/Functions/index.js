//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString = "Functions Web App"
title.innerText = titleString;
webtitle.innerText = titleString;
console.log(titleString);


//Convert to the Local String Language

let myNum = 22;
// myNum = myNum.toLocaleString("en-US");
// myNum = myNum.toLocaleString("hi-IN");
// myNum = myNum.toLocaleString("en-uk",{style: "currency",currency:"CAD"});
// myNum = myNum.toLocaleString("undefine", { style: "percent" });
myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "Fahrenheit" });

console.log(myNum);
function firstFunction(params) {
    console.log("firstFunction Working");
}

firstFunction(myNum);