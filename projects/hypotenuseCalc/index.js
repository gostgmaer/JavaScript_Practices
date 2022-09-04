//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString = "HypotenuseCalc Web App"
title.innerText = titleString;
webtitle.innerText = titleString;
console.log(titleString);



// let a,b,c;
// a= window.prompt("Enter Side A");
// a=Number(a)
// document.getElementById("alabel").innerText=`A value is ${a}`;
// b=window.prompt("Enter Side B");
// b=Number(b);
// document.getElementById("blabel").innerText=`B value is ${b}`;

// c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// document.getElementById("clabel").innerText=`C value is ${c}`;
// console.log("Side C",c);
let btn = document.querySelector("#submitbtn")

btn.addEventListener("click", function () {
    console.log("btn event Working");
    let a, b, c;
    a = document.getElementById("atext").value;
    a = Number(a)
    
    document.getElementById("alabel").innerText = `A value is ${a}`;

    b = document.getElementById("btext").value;
    b = Number(b);
    document.getElementById("blabel").innerText = `B value is ${b}`;

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("clabel").innerText = `C value is ${c}`;
    console.log("Side C", c);
})




