//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
let modalTitle = document.getElementById("modal-title");
const titleString = "Object Web App"
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



//Application Started

const object = {
  "id": 1,
  "first_name": "Taryn",
  "last_name": "Pendock",
  "email": "tpendock0@barnesandnoble.com",
  "gender": "Female",
  "ip_address": "55.19.25.23",
  drive: function () { console.log("Drive a Car");  }
}

console.log(object.ip_address,object.email);
object.drive()
