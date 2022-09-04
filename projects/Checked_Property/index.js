//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString="Checked Property Web App"
title.innerText=titleString;
webtitle.innerText=titleString;
console.log(titleString);


let btn = document.getElementById("button");


btn.addEventListener("click",function (params) {
    let check =document.getElementById("checkbox");
    let visa =document.getElementById("visa");
    let mastercard =document.getElementById("mastercard");
    let paypal =document.getElementById("paypal");
    if (check.checked) {
        console.log("You are subcribed");
        
    } else {
        console.log("You are Not subcribed");
        
    }
    console.log(check.value);

    
    
})
