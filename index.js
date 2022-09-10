import moment from 'moment';


console.log("Is it working as Expected");
let ages = document.getElementById("age");
let names = document.getElementById("name");
let isstudent = document.getElementById("student");

// let age =  prompt("Give a Age");
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

const date = moment(new Date());



let a = date().format('yyyy-MM-DDTHH:mm:ss.SSZ');
let b = date().add(10, 'minutes').format('yyyy-MM-DDTHH:mm:ss.SSZ');
let c = date().add(1, 'hour').format('yyyy-MM-DDTHH:mm:ss.SSZ');
let d = date().add(1, 'day').format('yyyy-MM-DDTHH:mm:ss.SSZ');
let e = date().add(1, 'day').add(1, 'hour').add(10, 'minutes').format('yyyy-MM-DDTHH:mm:ss.SSZ');


console.log(a,b,c,d,e);