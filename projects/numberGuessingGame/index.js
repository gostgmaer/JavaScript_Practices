//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString="numberGuessingGame Web App"
title.innerText=titleString;
webtitle.innerText=titleString;
console.log(titleString);


//Apps

const ans= Math.floor(Math.random()*10+1);
let guessss = 0;

let btn = document.getElementById("button")

btn.addEventListener("click",function (params) {
    let guess = document.getElementById("enternumber").value;
    guessss +=1;
    if (guess==ans) {
        alert(`${ans} is the #number. It's too you ${guessss} guesses`)
        console.log(`${ans} is the #number. It's too you ${guessss} guesses`);
        
    } else if(guess<ans) {
        alert("Too Small")
        console.log("Too Small");
        
    }else{
        alert("Too Big")
        console.log("Too Big");
    }

})
