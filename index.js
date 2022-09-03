console.log("Is it working as Expected");
let ages = document.getElementById("age");
let names = document.getElementById("name");
let isstudent = document.getElementById("student");

let age =  prompt("Give a Age");
let fName = "Kishor"
let student = false;
if (age < 23) {
    student=true;
    
}
let ss=""
if (student==true) {
    ss = `You are a Student: ${student}`
    
}else{
    ss = `You are not a Student: ${student}`

}
ages.innerText=`Your Name is ${fName}`
names.innerText=`Your Age is ${age} Now`
isstudent.innerText=ss;




console.log("Age:",fName,age,student);