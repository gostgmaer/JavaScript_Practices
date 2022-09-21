//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString = "Functions Web App"
title.innerText = titleString;
webtitle.innerText = titleString;
console.log(titleString);


//Convert to the Local String Language

let myNum = 22;
// myNum = myNum.toLocaleString("en-US");
// myNum = myNum.toLocaleString("hi-IN");
// myNum = myNum.toLocaleString("en-uk",{style: "currency",currency:"CAD"});
// myNum = myNum.toLocaleString("undefine", { style: "percent" });
// myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "Fahrenheit" });

// console.log(myNum);
// function firstFunction(params) {
//     console.log("firstFunction Working");
// }

// firstFunction(myNum);

//Callback Function

// let total = sum(2,3);
// displayDOM(total);
// function sum(x,y) {
//     let result  = x+y;
//     return result;
// }


Sum(2, 3, displayDOM)
function Sum(x, y, Callback) {
    let result = x + y;
    Callback(result);

}

function displayconsole(output) {
    console.log(output);


}

function displayDOM(output) {
    document.getElementById("my_lbl").innerHTML = output;

}

//Function Express

console.log("Function Expression");


const greading = function (params) {
    console.log("hellow");
}

greading();


//counter

Decress = document.getElementById("Decress");
Increase = document.getElementById("Increase");

let count = 0;

// function increseCount(){
//     count +=1;
//     document.getElementById("my_lbl").innerHTML=count;
// }
// function decreseCount(){
//     count -=1;
//     document.getElementById("my_lbl").innerHTML=count;
// }

Increase.onclick = function (params) {
    count += 1;
    document.getElementById("my_lbl").innerHTML = count;
}

Decress.onclick = function (params) {
    count -= 1;
    document.getElementById("my_lbl").innerHTML = count;
}


console.log("Array Function");
const greeting = (userName) => console.log(`hellow ${userName}`);


const precentage = (x, y) =>
    x / y * 100



console.log(`${precentage(20, 30)} %`);

// precentage(20, 10)


let ages = Array.from({ length: 112 }, () => Math.floor(Math.random() * 40));
console.log(ages);


//nasted Functions

let userName = "KISHOR";
let userIndex = 0;

login();

function login() {
    desplayUser();
    displayUserInbox();
    function desplayUser() {
        console.log(`Welcome ${userName}`);

    }
    function displayUserInbox() {
        console.log(`You have ${userIndex} New Message`);

    }
}

timercounter()
function timercounter(params) {
    let countDownDate = new Date("3854-12-03T12:46:20.000Z").getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        // let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        // let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //     + minutes + "m " + seconds + "s ";
        document.getElementById("demo").innerHTML = counterFunction(distance)

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}

function counterFunction(milliseconds) {
    let temp = milliseconds / 1000;
    let years = Math.floor(temp / 31536000),
        months = Math.floor((temp %= 31536000) / (2590000)),
        days = Math.floor((temp %= 31536000) / 86400),
        hours = Math.floor((temp %= 86400) / 3600),
        minutes = Math.floor((temp %= 3600) / 60),
        seconds = temp % 60;
    if (days = 30) {
        months += 1;
    }


    if (days || months || hours || seconds || minutes) {
        return (years ? years + " years " : "") + (months ? months + " months " : "") +
            (days ? days + " days " : "") +
            (hours ? hours + " hours " : "") +
            (minutes ? minutes + " mimutes" : "")
    }

    return "0";
}


// function calculateDifference(thenString) {
//     const second = 1000
//     const minute = 60 * second
//     const hour = 60 * minute
//     const day = 24 * hour
//     const month = 30 * day // approximately
//     const year = 365 * day // approximately

//     const now = new Date();
//     const then = new Date(thenString);

//     let difference = (now - then);
//     const time = [{ year }, { month }, { day }, { hour }, { minute }, { second }].map((item, i, a) => {
//       const [[unitName, unit]] = Object.entries(item)
//       const units = difference / unit | 0
//       difference -= unit * units
//       const maybePlural = units === 1 ? "" : "s"
//       return units > 0 ? units + " " + unitName + maybePlural : ""
//     }).filter(x => x)

//     const formattedTime = time.length > 1 ? [...time.slice(0, -1), "and", time.slice(-1)].join(" ") : time[1]
//     return formattedTime
//   }

//   function displayDifference() {
//     displayBox.textContent = calculateDifference(dateInput.value + ", " + timeInput.value)
//   }

//   const dateInput = document.querySelector(".date")
//   const timeInput = document.querySelector(".time")
//   const displayBox = document.querySelector(".js-display-difference")
//   dateInput.addEventListener("change", displayDifference)
//   timeInput.addEventListener("change", displayDifference)
//   console.log(displayDifference());

//   setInterval(displayDifference, 1000)

// class CountDown {
//     constructor(expiredDate, onRender, onComplete) {
//         this.setExpiredDate(expiredDate);

//         this.onRender = onRender;
//         this.onComplete = onComplete;
//     }

//     setExpiredDate(expiredDate) {
//         // get the current time
//         const currentTime = new Date().getTime();

//         // calculate the remaining time 
//         this.timeRemaining = expiredDate.getTime() - currentTime;

//         this.timeRemaining > 0 ?
//             this.start() :
//             this.complete();
//     }


//     complete() {
//         if (typeof this.onComplete === 'function') {
//             onComplete();
//         }
//     }
//     getTime() {
//         return {
//             days: Math.floor(this.timeRemaining / 1000 / 60 / 60 / 24),
//             hours: Math.floor(this.timeRemaining / 1000 / 60 / 60) % 24,
//             minutes: Math.floor(this.timeRemaining / 1000 / 60) % 60,
//             seconds: Math.floor(this.timeRemaining / 1000) % 60
//         };
//     }

//     update() {
//         if (typeof this.onRender === 'function') {
//             this.onRender(this.getTime());
//         }
//     }

//     start() {
//         // update the countdown
//         this.update();

//         //  setup a timer
//         const intervalId = setInterval(() => {
//             // update the timer  
//             this.timeRemaining -= 1000;

//             if (this.timeRemaining < 0) {
//                 // call the callback
//                 complete();

//                 // clear the interval if expired
//                 clearInterval(intervalId);
//             } else {
//                 this.update();
//             }

//         }, 1000);
//     }
// }

let date = new Date("2023-01-03T12:46:20")



function timeLeft(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var months = Math.floor(t / (days * 30));
    var years = Math.floor(t / (days * 365));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

$(document).ready(function () {
    var today = new Date();
    var deadline = 'January 1 ' + (today.getFullYear() + 1) + " 00:00:00";
    if (today.getMonth() == 0 && today.getDate() == 1) {
        deadline = 'January 1 ' + (today.getFullYear()) + " 00:00:00";
    };

    $("#header").hover(function () {
        $(this).toggleClass('bluelight');
    });

    $(".clock").hover(function () {
        $(this).toggleClass('bluelight');
    });

    var setClock = function (newyear) {
        var timeinterval = setInterval(function () {
            var t = timeLeft(newyear);
            $('#days').text(t.days);
            $('#hours').text(t.hours);
            $('#mins').text(('0' + t.minutes).slice(-2));
            $('#secs').text(('0' + t.seconds).slice(-2));
            if (t.total <= 0) {
                clearInterval(timeinterval);
                var now = new Date();
                var yearStr = now.getFullYear().toString();
                $('#header').text("Happy New Year!!!");
                $('#days').text(yearStr[0]);
                $('#days-text').text("Happy");
                $('#hours').text(yearStr[1]);
                $('#hours-text').text("New");
                $('#mins').text(yearStr[2]);
                $('#mins-text').text("Year");
                $('#secs').text(yearStr[3]);
                $('#secs-text').text("!!!");
                $('#info').text("Countdown starts again tomorrow!");
            }
        }, 1000);
    };

    setClock(deadline);

});
