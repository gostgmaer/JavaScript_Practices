//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString="Type Conversion Application"
title.innerText=titleString;
webtitle.innerText=titleString;
console.log(titleString);



let pi = 3.14159;
let radies;
let circumfarence;
radies= window.prompt("ENter the radias of a circle");
radies=Number(radies);
//pi = 420.69

circumfarence =2*pi*radies;
console.log("circumfarence",typeof circumfarence,circumfarence);
alert(circumfarence);