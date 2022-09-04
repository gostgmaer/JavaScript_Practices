//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
let modalTitle = document.getElementById("modal-title");
const titleString="numberGuessingGame Web App"
title.innerText=titleString;
webtitle.innerText=titleString;
modalTitle.innerText=titleString;
console.log(titleString);

//Show parent Div as a Modal

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.getElementById("myBtn");
var btnsss = document.querySelector("#body-class");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btns.onclick = function() {
//   modal.style.display = "block";
// }

window.onload =  function() {
    modal.style.display = "block";
  }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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
