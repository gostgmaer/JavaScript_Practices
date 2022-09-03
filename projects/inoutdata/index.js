//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString="User Input data"
title.innerText=titleString;
webtitle.innerText=titleString;
console.log(titleString);


//programming

let user ;
let btn =  document.getElementById("button");
let userfield= document.getElementById("nametxt");
let rightSection = document.getElementById("right-section");

btn.addEventListener("click",function(){
   
    user = userfield.value;
    let newlabel = document.createElement("label");
    newlabel.innerText=user;
    rightSection.append(newlabel.innerText=user);
    console.log("btn Working",user);
})
