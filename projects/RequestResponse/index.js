//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
let modalTitle = document.getElementById("modal-title");
const titleString = "RequestResponse Web App"
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



//Application

let promise= new Promise((resolve, reject) => {
  let fileLoaded = false;
  if (fileLoaded) {
     resolve("File Loaded:...")
    
  } else {
    reject("File not loaded")
    
  }
});

promise.then(value=>{
  console.log(value);

})
.catch(error=> console.log(error));


const wait = time => new Promise((resolve, reject) => {
  setTimeout(resolve, time);
  
});
wait(3000).then(()=>console.log("thanks"));




//async


async function loadFile() {
  let fileLoaded = false;
  if (fileLoaded) {
     return "File Loaded:...";
    
  } else {
    throw "File not loaded";
    
  }
}
loadFile().then(value=>{
  console.log(value);

})
.catch(error=> console.log(error));


//await
async function stratProcess(params) {
  try {
    let message= await loadFile();
    console.log(message);
    
  } catch (error) {
    console.log(error);
    
  }
 
}

stratProcess();
// await awateLoafIle(()=>{

// })