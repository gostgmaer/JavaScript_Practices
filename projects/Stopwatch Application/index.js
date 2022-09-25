//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
let modalTitle = document.getElementById("modal-title");
const titleString = "Stopwatch Application Web App"
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




//Stopwatch Application Start


window.onload= function () {
  let seconds = 00; 
  let tens = 00; 
  let appendTens = document.getElementById("tens")
  let appendSeconds = document.getElementById("seconds")
  let buttonStart = document.getElementById('button-start');
  let buttonStop = document.getElementById('button-stop');
  let buttonReset = document.getElementById('button-reset');
  let Interval ;

    buttonStart.onclick=function () {
      clearInterval(Interval);
      Interval=setInterval(startTimer,10);
    }

    function startTimer() {
      tens++;
      if(tens <= 9){
        appendTens.textContent = "0" + tens;
      }
      if (tens > 9){
        appendTens.textContent = tens;
        
      } 
      if (tens > 99) {
        console.log("seconds",seconds);
        seconds++;
        appendSeconds.textContent = "0" + seconds;
        tens = 0;
        appendTens.textContent = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.textContent = seconds;
      }
      
    }
    buttonStop.addEventListener("click",function () {
      clearInterval(Interval);
    })
    buttonReset.onclick = function() {
      clearInterval(Interval);
     tens = "00";
     seconds = "00";
     appendTens.innerHTML = tens;
     appendSeconds.innerHTML = seconds;
   }


}

