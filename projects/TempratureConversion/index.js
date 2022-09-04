//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
let modalTitle = document.getElementById("modal-title");
const titleString = "TempratureConversion Web App"
title.innerText = titleString;
webtitle.innerText = titleString;
modalTitle.innerText = titleString;
console.log(titleString);

//Show parent Div as a Modal

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.getElementById("myBtn");
btns.onclick = function () {
  modal.style.display = "block";
}
var btnsss = document.querySelector("#body-class");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btns.onclick = function() {
//   modal.style.display = "block";
// }

window.onload = function () {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




//Application Coding Started

let submitbtn = document.getElementById("submitbtn");


submitbtn.addEventListener("click", function () {

  let textfield = document.querySelector("#textfeild");
  let cencial = document.querySelector("#cencial");
  let fahrenhite = document.querySelector("#fahrenhite");
  let resulttxt = document.querySelector("#result");
  let result ;
  if (cencial.checked==true) {

    
    result = (textfield.value - 32) * 5 / 9;

    
  } if (fahrenhite.checked==true) {
    result = ((textfield.value)*1.8)+32
    
  }
  resulttxt.innerText =`This is the Result: ${result}`
  console.log(result);
  

  

})







