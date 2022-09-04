//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString="HypotenuseCalc Web App"
title.innerText=titleString;
webtitle.innerText=titleString;
console.log(titleString);



let a,b,c;
a= window.prompt("Enter Side A");
a=Number(a)
b=window.prompt("Enter Side B");
b=Number(b);

c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

console.log("Side C",c);




