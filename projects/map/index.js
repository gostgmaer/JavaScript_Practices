//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
let modalTitle = document.getElementById("modal-title");
const titleString = "Map Method Web App"
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


const store = new Map([
  ["t-shirt", 30],
  ["Jeans", 39],
  ["underware", 20],
  ["Shirt", 99],
  ["socks", 10]
]);

let shoopingCart = 0;
shoopingCart += store.get("t-shirt");
shoopingCart += store.get("Shirt");
console.log(shoopingCart);

store.set("hat",44);
store.delete("socks")
console.log(store.size);
console.log(store.has("Jeans"));




store.forEach((value, key) => {
  console.log(`${key} $${value}`);

});






