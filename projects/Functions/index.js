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
// myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "Fahrenheit" });

// console.log(myNum);
// function firstFunction(params) {
//     console.log("firstFunction Working");
// }

// firstFunction(myNum);

//Callback Function

// let total = sum(2,3);
// displayDOM(total);
// function sum(x,y) {
//     let result  = x+y;
//     return result;
// }


Sum(2, 3, displayDOM)
function Sum(x, y, Callback) {
    let result = x + y;
    Callback(result);

}

function displayconsole(output) {
    console.log(output);


}

function displayDOM(output) {
    document.getElementById("my_lbl").innerHTML = output;

}

//Function Express

console.log("Function Expression");


const greading = function (params) {
    console.log("hellow");
}

greading();


//counter

Decress = document.getElementById("Decress");
Increase = document.getElementById("Increase");

let count = 0;

// function increseCount(){
//     count +=1;
//     document.getElementById("my_lbl").innerHTML=count;
// }
// function decreseCount(){
//     count -=1;
//     document.getElementById("my_lbl").innerHTML=count;
// }

Increase.onclick = function (params) {
    count += 1;
    document.getElementById("my_lbl").innerHTML = count;
}

Decress.onclick = function (params) {
    count -= 1;
    document.getElementById("my_lbl").innerHTML = count;
}


console.log("Array Function");
const greeting = (userName) => console.log(`hellow ${userName}`);


const precentage = (x, y) => 
    x / y * 100



console.log(`${precentage(20, 30)} %`);

// precentage(20, 10)


let ages = Array.from({length: 112}, () => Math.floor(Math.random() * 40));
console.log(ages);


//nasted Functions

