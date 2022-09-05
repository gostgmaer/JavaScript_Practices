//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
let modalTitle = document.getElementById("modal-title");
const titleString = "SPREAD operator Web App"
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


let userName = "Kishor Sarkar"
let color= ["Actinic",
"Ultra Indigo",
"Amarklor",
"Kalish",
"Garrow",
"Infra-White",
"Fuligin",
"Grue",
"bleen",
"Mull",
"glow",
"Hooloovoo",
"Octarine",
"Squant",
"Jale",
"Ulfire",
"Dolm",
"tang",
"burn",
"Berl",
"Crynor",
"Nusp",
"Onsible",
"Htun",
"Sangoire",
"Gloxym",
"Smaudre",
"Rawn",
"Pallow",
"Plaid",
"Shattan",
"Flange",
"Apocyan",
"Cosmogone",
"Gant",
"Irrigo",
"Peligin",
"Violant",
"Viric",
"El Gris/Gray",
"Gloze",
"Flush"  ]

let chinense= [
  "Adjuma",
  "Ají dulce",
  "Carolina Reaper",
  "Datil",
  "Fatalii",
  "Habanero",
  "Hainan yellow lantern chili",
  "Madame Jeanette",
  "Naga jolokia",
  "Red Savina habanero",
  "Scotch bonnet",
  "Trinidad moruga scorpion",
  "Trinidad scorpion"
];
console.log(color);


let newNUm = Array.from({length: 120}, () => Math.floor(Math.random() * 40));
console.log(newNUm);
let Max = Math.max(...newNUm);

console.log(Max);

color.push(...chinense);

console.log(color);


//Rest Parameter

let a =1;
let b =2;
let c= 3;
let d = 4;
let e=11;


console.log(sum(a,b,c,d,e,c,e));
function sum(...numbers) {
  let total = 0;
  for (const iterator of numbers) {
    total += iterator;
    
  }
  return total
  
}