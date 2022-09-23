//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
let modalTitle = document.getElementById("modal-title");
const titleString = "DOCUMENT OBJECT MODAL Web App"
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

//Applicaion


import * as index from "./assets/js/index.js";



let firstname = document.getElementsByName("firstname"),
  middlename = document.getElementsByName("middlename"),
  lastname = document.getElementsByName("lastname"),
  countryCode = document.getElementsByName("country code"),
  phone = document.getElementsByName("phone"),
  email = document.getElementsByName("email"),
  psw = document.getElementsByName("psw"),
  pswRepeat = document.getElementsByName("psw-repeat") ;
firstname = firstname[0]
firstname.value = 8888
console.log(firstname,middlename,lastname,countryCode,phone,email,psw,pswRepeat);