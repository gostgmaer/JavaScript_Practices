//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString = "Loop Web App"
title.innerText = titleString;
webtitle.innerText = titleString;
console.log(titleString);


///


//c0ndition

let adalt = checkAge(112);
console.log(adalt);
function checkAge(age) {
    return age >= 18 ? true : false;

}




let cultivars = [
    "Actinic",
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
    "Flush"
]

cultivars.forEach(Uppercases)
cultivars.forEach(print)

function Uppercases(element,index,array) {
    array[index]=element[0].toUpperCase()+element.substring(1)
    
}
function print(params) {
    console.log(params);
}
