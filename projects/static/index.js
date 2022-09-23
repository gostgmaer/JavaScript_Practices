//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
let modalTitle = document.getElementById("modal-title");
const titleString = "sTATIC pART Web App"
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









//aPPLICATION coDE

console.log("setInterVal ===================");

// function name() {
//   // for (let index = 0; index=100; index++) {
//   //   console.log("This is Code"+index);
//   // }
//   for (let index = 0; index < 10; index++) {
//     const element = array[index];
//     console.log(element);

//   }
// }

let count = 0;
let max = 5;
max = Number(max)

// setInterval(() => {
//   countUp()
// }, 1000);


const myTimer = setInterval(countUp, 1000);

function countUp() {
  count += 1;
  console.log(count);
  if (count >= max) {
    clearInterval(myTimer);

  }

}



const myLabel = document.querySelector("#myLabel")
let date = new Date;
var options = {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "numeric"
};
// date = date.toLocaleString("en")
let ddate = date.getFullYear()
let getDate = date.getDate()
let getDay = date.getDay()
let getHours = date.getHours()
let getMilliseconds = date.getMilliseconds()
let getMinutes = date.getMinutes()
let getMonth = date.getMonth()
let getSeconds = date.getSeconds()
let getTime = date.getTime()
let getTimezoneOffset = date.getTimezoneOffset()
let getUTCDate = date.getUTCDate()
console.log(date);

myLabel.innerHTML = dateFormat(date)


function dateFormat(date) {
  let year = date.getFullYear(), month = date.getMonth(), day = date.getDay(), hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
}


// Clock Application





function updatedateTime() {
  let dateTime =  new Date();
  myLabel.innerHTML = formatHours(dateTime);
  function formatHours(date) {
    let hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds(), ampm= hours>12? "PM":"AM";
    hours=(hours%12)||12;
    return `${hours}:${minutes}:${seconds} ${ampm}`
  }
  
}

setInterval(() => {
  this.updatedateTime()
}, 1000);


//async