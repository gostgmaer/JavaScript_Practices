//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString="Counter Web App"
title.innerText=titleString;
webtitle.innerText=titleString;
console.log(titleString);


//Application start


let increase = document.querySelector("#increase");
let reset = document.querySelector("#reset");
let decress = document.querySelector("#decress");
let showcount = document.querySelector("#showcount");
let count =0

increase.addEventListener("click",function (params) {
    if (count >= 0) {
        count++
    }
    showcount.innerText=count
    console.log("item Increase",count);
    
})

decress.addEventListener("click",function (params) {
    if (count > 0) {
        count--
    }
    showcount.innerText=count
    console.log("item decress",count);
    
})

reset.addEventListener("click",function (params) {
     count = 0
    showcount.innerText=count
    console.log("item RESET",count);
    
})
