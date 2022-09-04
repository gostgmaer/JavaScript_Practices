//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
let modalTitle = document.getElementById("modal-title");
const titleString = "ArracyPractices Web App"
title.innerText = titleString;
webtitle.innerText = titleString;
modalTitle.innerText = titleString;
console.log(titleString);

//Show parent Div as a Modal

var modal = document.getElementById("myModal");
var btns = document.getElementById("myBtn");
btns.onclick = function () {
  modal.style.display = "block";
}
var btnsss = document.querySelector("#body-class");
var span = document.getElementsByClassName("close")[0];
window.onload = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





//Application

let Fruit = ["apple",
  "apricot",
  "avocado",
  "banana",
  "bell pepper",
  "bilberry",
  "blackberry",
  "blackcurrant",
  "blood orange",
  "blueberry",
  "boysenberry",
  "breadfruit",
  "canary melon",
  "cantaloupe",
  "cherimoya",
  "cherry",
  "chili pepper",
  "clementine",
  "cloudberry",
  "coconut",
  "cranberry",
  "cucumber",
  "currant",
  "damson",
  "date",
  "dragonfruit",
  "durian",
  "eggplant",
  "elderberry",
  "feijoa",
  "fig",
  "goji berry",
  "gooseberry",
  "grape",
  "grapefruit",
  "guava",
  "honeydew",
  "huckleberry",
  "jackfruit",
  "jambul",
  "jujube",
  "kiwi fruit",
  "kumquat",

  "lime",
  "loquat",
  "lychee",
  "mandarine",
  "mango",
  "mulberry",
  "nectarine",
  "nut",
  "olive",
  "orange",
  "papaya",
  "passionfruit",
  "peach",
  "pear",
  "persimmon",
  "physalis",
  "pineapple",
  "plum",
  "pomegranate",
  "pomelo",
  "purple mangosteen",
  "quince",
  "raisin",
  "rambutan",
  "raspberry",
  "redcurrant",
  "rock melon",
  "salal berry",
  "satsuma",
  "star fruit",
  "strawberry",
  "tamarillo",
  "tangerine",
  "tomato",
  "ugli fruit",
  "watermelon"]
  console.log(Fruit.length);
  Fruit.push("Lemon")
  console.log(Fruit.length);
  Fruit.pop()
  console.log(Fruit.length);
  Fruit.unshift("Alu")
  console.log(Fruit[2]);
  console.log(Fruit.length);
  Fruit.shift()
  // console.log(Fruit.push("Lemon"));
console.log("indexOf",Fruit.indexOf("mango"));

  console.log(Fruit);
  // for (let index = 0; index < Fruit.length; index++) {
  //   const element = Fruit[index];
  //   element.toUpperCase()
  //   console.log(element);
  //   let newele = document.createElement("label")
  //   let footerSection = document.getElementById("footer-section")
  //   footerSection.append(newele.innerText=element)
    
    
  // }

  for (const fruit of Fruit) {
   console.log(fruit);

  }

  for (const key in Fruit) {
    console.log(key);
  }




