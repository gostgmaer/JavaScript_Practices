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

const scheduleDate= {
  "room_schedule": {
      "room_id": 1,
      "schedule": [
          {
              "week_day_id": 1,
              "capacity": 100,
              "start_time": "04:00:00",
              "end_time": "18:00:00",
              "week_day_name": "Monday",
             
              "week_day_checked": "1"
          },
          {
              "week_day_id": 2,
              "capacity": 100,
              "start_time": "03:00:00",
              "end_time": "18:00:00",
              "week_day_name": "Tuesday",
             
              "week_day_checked": "1"
          },
          {
              "week_day_id": 3,
              "capacity": 100,
              "start_time": "03:00:00",
              "end_time": "17:00:00",
              "week_day_name": "Wednesday",
              
              "week_day_checked": "1"
          },
          {
              "week_day_id": 4,
              "capacity": 100,
              "start_time": "03:00:00",
              "end_time": "17:00:00",
              "week_day_name": "Thursday ",
              
              "week_day_checked": "1"
          },
          {
              "week_day_id": 5,
              "capacity": 100,
              "start_time": "04:00:00",
              "end_time": "17:00:00",
              "week_day_name": "Friday",
             
              "week_day_checked": "1"
          },
          {
              "week_day_id": 6,
              "capacity": 100,
              "start_time": "08:00:00",
              "end_time": "17:00:00",
              "week_day_name": "Saturday",
            
              "week_day_checked": "1"
          },
          {
              "week_day_id": 7,
              "capacity": 100,
              "start_time": "08:00:00",
              "end_time": "17:00:00",
              "week_day_name": "Sunday",
             
              "week_day_checked": "1"
          }
      ],
      "breaks": [
          {
              "break_start_time": "11:00:00",
              "break_end_time": "12:00:00",
              "week_day_id": 1
          },
          {
              "break_start_time": "11:00:00",
              "break_end_time": "12:00:00",
              "week_day_id": 2
          },
          {
              "break_start_time": "12:00:00",
              "break_end_time": "13:00:00",
              "week_day_id": 3
          },
          {
              "break_start_time": "12:00:00",
              "break_end_time": "13:00:00",
              "week_day_id": 4
          },
          {
              "break_start_time": "12:00:00",
              "break_end_time": "13:00:00",
              "week_day_id": 5
          },
          {
              "break_start_time": "12:00:00",
              "break_end_time": "13:00:00",
              "week_day_id": 6
          },
          {
              "break_start_time": "12:00:00",
              "break_end_time": "13:00:00",
              "week_day_id": 7
          }
      ]
  },
  "room_holiday": [
      {
          "id": 1,
          "ext_system_id": 1,
          "holiday_date": "2022-09-30T00:00:00.000Z",
          "holiday_name": "D HOLIDAY",
          "holiday_description": "description"
      }
  ],
  "exceptions": {
      "ext_system_id": 1,
      "schedule": [],
      "breaks": []
  },
  "status": 200
}
const result = [
  {
      "id": 136,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9768508488",
      "email": "Nitinpatil@gmail.com",
      "token": "J 111362238",
      "alien_number": "skIJVVS:637",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111362238",
              "meeting_room_id": "",
              "meeting_duration": 71,
              "alien_number": "skIJVVS:637",
              "created_on": "2022-04-26T10:12:01.000Z",
              "updated_on": "2022-05-08T02:31:39.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111362238",
              "meeting_room_id": null,
              "meeting_duration": 7,
              "alien_number": "skIJVVS:637",
              "created_on": "2022-05-08T02:31:32.000Z",
              "updated_on": "2022-05-08T02:31:56.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 3,
              "queue_name": "Oath Administration",
              "token": "J 111362238",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "skIJVVS:637",
              "created_on": "2022-05-08T02:31:38.000Z",
              "updated_on": "2022-05-10T04:40:32.000Z",
              "status": "5",
              "provider_id": 102,
              "message": "Plan review process completed"
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          },
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          },
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ]
  },
  {
      "id": 135,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "esingh20s@gmail.com",
      "token": "J 111352236",
      "alien_number": "0g3OXNX:631",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111352236",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "0g3OXNX:631",
              "created_on": "2022-04-19T21:16:55.000Z",
              "updated_on": "2022-05-08T04:17:23.000Z",
              "status": "5",
              "provider_id": 102,
              "message": "Plan review process completed"
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ]
  },
  {
      "id": 137,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9932868652",
      "email": "Rt@yopmail.com",
      "token": "J 111372239",
      "alien_number": "4ht9U8B:653",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111372239",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "4ht9U8B:653",
              "created_on": "2022-04-27T13:39:04.000Z",
              "updated_on": "2022-05-08T04:17:53.000Z",
              "status": "5",
              "provider_id": 102,
              "message": "Plan review process completed"
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ]
  },
  {
      "id": 138,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9768508480",
      "email": "nitinpatiln73@gmail.com",
      "token": "J 111382240",
      "alien_number": "8r6RHJj:662",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111382240",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "8r6RHJj:662",
              "created_on": "2022-04-29T10:16:32.000Z",
              "updated_on": "2022-05-08T18:16:12.000Z",
              "status": "5",
              "provider_id": 102,
              "message": "Plan review process completed"
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ]
  },
  {
      "id": 141,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9932858523",
      "email": "Gd@gmail.com",
      "token": "J 111412243",
      "alien_number": "j4YTh4a:668",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111412243",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "j4YTh4a:668",
              "created_on": "2022-04-29T11:24:45.000Z",
              "updated_on": "2022-05-08T22:02:52.000Z",
              "status": "5",
              "provider_id": 102,
              "message": "Plan review process completed"
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ]
  },
  {
      "id": 148,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9932868602",
      "email": "Tt@yopmail.com",
      "token": "J 111482252",
      "alien_number": "p6a9AVT:730",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111482252",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "p6a9AVT:730",
              "created_on": "2022-05-06T10:44:36.000Z",
              "updated_on": "2022-05-10T04:38:50.000Z",
              "status": "5",
              "provider_id": 102,
              "message": "Plan review process completed"
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ]
  }
]
let cards = ["A", "2","3","4","5","6","7","8","9","J","Q","K"]
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
// console.log("indexOf", Fruit.indexOf("mango"));
// for (const key in Fruit) {
//   console.log(key);
// }
// console.log(Fruit);
// for (let index = 0; index < Fruit.length; index++) {
//   const element = Fruit[index];
//   element.toUpperCase()
//   console.log(element);
//   let newele = document.createElement("label")
//   let footerSection = document.getElementById("footer-section")
//   footerSection.append(newele.innerText=element)


// }

// Fruit = Fruit.sort().reverse()
// for (const fruit of Fruit) {
//   console.log(fruit);

// }
//Array .map

// let newNUm = Array.from({ length: 120 }, () => Math.floor(Math.random() * 40));
// console.log(newNUm);
// let squress = newNUm.map(squre)
// let quebes = newNUm.map(qube)

// quebes.forEach(print)

// function squre(params) {
//   return Math.pow(params, 2)

// }

// function print(params) {
//   console.log(params);

// }

// function qube(params) {
//   return Math.pow(params, 3)

// }




//Array.Filter




// let ages = Array.from({ length: 112 }, () => Math.floor(Math.random() * 40));
// console.log(ages);
// let adults = ages.filter(checkAge)
// console.log("Array.Filter method Filter aged more then 18");

// adults.forEach(display)

// function checkAge(params) {
//   return params >= 18;

// }
// function display(element) {
//   console.log(element);


// }
// Array.reduce()

// console.warn("Array.reduce() Method Log");
// let prices = Array.from({ length: 112 }, () => Math.floor(Math.random() * 400) + 100);
// console.log(prices);

// let total = prices.reduce(checkOut);
// console.log(`Total is $ ${total}`);
// function checkOut(total, params) {
//   return total + params;


// }

//shot array
// console.log(prices.sort());

// console.log(prices);


// let pointdes = prices.sort(sortdec)
// pointdes.forEach(showmarks)

// let pointase = prices.sort(sortase)
// pointase.forEach(showmarks)

// function sortdec(x, y) {
//   return y - x;


// }


// function sortase(x, y) {
//   return x - y;


// }

// function showmarks(params) {
//   console.log(params);

// }

function millisecondsToStrforTokenList(milliseconds) {
  let temp = milliseconds / 1000;
  let years = Math.floor(temp / 31536000),
  months = Math.floor((temp %= 31536000) / (86400*30)),
    days = Math.floor((temp %= 31536000) / 86400),
    hours = Math.floor((temp %= 86400) / 3600),
    minutes = Math.floor((temp %= 3600) / 60),
    seconds = temp % 60;
   
    

  if (days || hours || seconds || minutes) {
    return (years ? years + " years " : "") + (months ? months + " months " : "") +
      (days ? days + " days " : "") +
      (hours ? hours + " hours " : "") +
      (minutes ? minutes + " mimutes" : "")
  }

  return "0";
}

///console.log("1580428000",millisecondsToStr(1580428000) );


let difference;
let newarray;
let DateArray = "";
let arr = []
let d1, d2;
let waitingQ;
let inservice;
let lastqueue; 
let message, statusName,staff;
result.forEach(element => {
    
   // let  isAvailabelForAssign = element.assinged_queue.slice(-1).pop();
    let newStaff = element.staff_info.slice(-1).pop();
    //let fqueue = element.assinged_queue.slice().pop();
    let newass = element.assinged_queue[element.assinged_queue.length-1]
    let first = element.assinged_queue.find(() => true)
    let dateNew = new Date(first.created_on);
   // console.log(dateNew);
    
    // console.log(newStaff);
    element["queueStatus"] = newass.status;
    element["message"] = newass.message;
    element["message"] = newass.message;
    element["createdDate"]= first.created_on;

    if (newStaff) {
        element["provider_first_name"] = newStaff.provider_first_name;
         element["provider_last_name"] = newStaff.provider_last_name.slice(0,1);
        //  element.provider_last_name.slice(0,1);
        element["provider_id"] = newStaff.provider_id;
    } else{
        element["provider_first_name"] = "--";
    element["provider_last_name"] = "-";
    element["provider_id"] = null;
    }
    if (newass.status == 5) {
        element["statusName"] = "Completed - "
    
      }else if(newass.status == 2) {
        element["statusName"] = "Inservice"
    
      }else if(newass.status == 1) {
        element["statusName"] = "Waiting"
    
      }else{
        element["statusName"] = "Waiting"
      }
  element.assinged_queue.forEach(Object => {
    if (Object.status==5 || Object.status==3) {
        Object.queue_name = `✓ ${Object.queue_name}`;  
    }else  if (Object.status==2 ) {
        Object.queue_name = `- ${Object.queue_name}`;  
    } else  if (Object.status==1) {
        Object.queue_name = `⧖ ${Object.queue_name}`;  
    } else{
        Object.queue_name = `⧖ ${Object.queue_name}`;
    }
    d1 = new Date(Object.created_on);
    d2 = new Date(Object.updated_on)
    difference = d2 - d1;
    Object["newTime"] = difference;
    
  });
  //console.log(element);
 // element["isAvailabelForAssign"] = {...isAvailabelForAssign};
  let totalTime = element.assinged_queue.reduce((n, { newTime }) => n + newTime, 0);
  totalTime = (millisecondsToStrforTokenList(totalTime));
  
  let updateDate = new Date(first.created_on)
  let todayDate = new Date();
  let diff = todayDate- updateDate;
  
  console.log("todayDate",millisecondsToStrforTokenList(diff)+millisecondsToStrforTokenList(difference));
  if (newass.status ==1 ) {
    totalTime = millisecondsToStrforTokenList(diff)+millisecondsToStrforTokenList(difference)
    
  } else if(newass.status ==2) {
    totalTime = millisecondsToStrforTokenList(diff)
  } else if (newass.status ==3){
    totalTime = millisecondsToStrforTokenList(diff)
  }
  element["totalTime"] = totalTime;
 

});

console.log(result);



// console.log(scheduleDate.room_schedule);


//   var myArray = scheduleDate["room_schedule"].schedule.filter(ar => scheduleDate["room_schedule"].breaks.find(rm => (rm.week_day_id == ar.week_day_id)))

// console.log(myArray);




//Shuffle Card Program
// shuffle(cards)
// console.log(cards);
// cards.forEach(card=> console.log(card))

// function shuffle(array) {
//     let currantIndex = array.length;
//     while (currantIndex != 0) {
//         let randomIndex = Math.floor(Math.random()*array.length);
//         currantIndex -= 1
//         let temp  =array[currantIndex];
//         array[currantIndex]=array[randomIndex];
//         array[randomIndex]=temp;
        
//     }
//     return array;
// }