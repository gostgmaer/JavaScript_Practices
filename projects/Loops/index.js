//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString = "Loop Web App"
title.innerText = titleString;
webtitle.innerText = titleString;
console.log(titleString);


///


//c0ndition

let adalt = checkAge(112);
console.log(adalt);
function checkAge(age) {
    return age >= 18 ? true : false;

}



