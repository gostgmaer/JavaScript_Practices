//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString="String Manupulation Web App"
title.innerText=titleString;
webtitle.innerText=titleString;
console.log(titleString);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let userName = "                              Kishor Sarkar                "
console.log(userName.length);
console.log(userName.charAt(0));

console.log(userName.indexOf("h"));

console.log(userName.lastIndexOf("r"));
userName= userName.trim();

console.log(userName);

userName= userName.replace("s","r")

console.log(userName);



