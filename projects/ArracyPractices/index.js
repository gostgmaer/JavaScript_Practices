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


const result =[
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
      ],
      "Total_time": "13 days 18 hours 28 minutes 31 seconds",
      "entry_time": "2022-04-26T10:12:01.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
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
      ],
      "Total_time": "18 days 7 hours 00 minutes 28 seconds",
      "entry_time": "2022-04-19T21:16:55.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
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
      ],
      "Total_time": "10 days 14 hours 38 minutes 49 seconds",
      "entry_time": "2022-04-27T13:39:04.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
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
      ],
      "Total_time": "9 days 7 hours 59 minutes 40 seconds",
      "entry_time": "2022-04-29T10:16:32.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
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
      ],
      "Total_time": "9 days 10 hours 38 minutes 07 seconds",
      "entry_time": "2022-04-29T11:24:45.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
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
      ],
      "Total_time": "3 days 17 hours 54 minutes 14 seconds",
      "entry_time": "2022-05-06T10:44:36.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 142,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "singhekta200@gmail.com",
      "token": "J 111422244",
      "alien_number": "vIhaR61:670",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111422244",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "vIhaR61:670",
              "created_on": "2022-04-29T14:25:54.000Z",
              "updated_on": "2022-05-10T04:40:14.000Z",
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
      ],
      "Total_time": "10 days 14 hours 14 minutes 20 seconds",
      "entry_time": "2022-04-29T14:25:54.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 143,
      "first_name": "ABC",
      "last_name": "ABC",
      "isd_code": "+1",
      "phone": "1234567890",
      "email": "test@test.com",
      "token": "J 111432245",
      "alien_number": "D3lUx8r:672",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111432245",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "D3lUx8r:672",
              "created_on": "2022-05-02T14:33:31.000Z",
              "updated_on": "2022-05-10T04:40:38.000Z",
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
      ],
      "Total_time": "7 days 14 hours 07 minutes 07 seconds",
      "entry_time": "2022-05-02T14:33:31.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 140,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9932868602",
      "email": "Bbzh@gmail.com",
      "token": "J 111402242",
      "alien_number": "pN9Etl8:667",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111402242",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "pN9Etl8:667",
              "created_on": "2022-04-29T11:02:58.000Z",
              "updated_on": "2022-05-10T04:40:44.000Z",
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
      ],
      "Total_time": "10 days 17 hours 37 minutes 46 seconds",
      "entry_time": "2022-04-29T11:02:58.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 139,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9768508480",
      "email": "nitin.patil@inadev.com",
      "token": "J 111392241",
      "alien_number": "WH87AP9:664",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111392241",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "WH87AP9:664",
              "created_on": "2022-04-29T10:22:00.000Z",
              "updated_on": "2022-05-10T04:40:50.000Z",
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
      ],
      "Total_time": "10 days 18 hours 18 minutes 50 seconds",
      "entry_time": "2022-04-29T10:22:00.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 123,
      "first_name": "Varun",
      "last_name": "Sengupta",
      "isd_code": "+1",
      "phone": "5717309283",
      "email": "varun.sengupta@inadev.com",
      "token": "J 111232250",
      "alien_number": "qWerWm9:603",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111232250",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "qWerWm9:603",
              "created_on": "2022-05-06T01:34:57.000Z",
              "updated_on": "2022-05-10T04:40:57.000Z",
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
      ],
      "Total_time": "4 days 3 hours 06 minutes 00 seconds",
      "entry_time": "2022-05-06T01:34:57.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 144,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "ekta.singh1@inadev.com",
      "token": "J 111442246",
      "alien_number": "uv7Xcw5:673",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111442246",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "uv7Xcw5:673",
              "created_on": "2022-05-02T18:05:14.000Z",
              "updated_on": "2022-05-10T05:01:10.000Z",
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
      ],
      "Total_time": "7 days 10 hours 55 minutes 56 seconds",
      "entry_time": "2022-05-02T18:05:14.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 145,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9932868602",
      "email": "Bzbz@gmail.com",
      "token": "J 111452247",
      "alien_number": "VpLShWA:679",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111452247",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "VpLShWA:679",
              "created_on": "2022-05-04T10:12:59.000Z",
              "updated_on": "2022-05-10T05:01:31.000Z",
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
      ],
      "Total_time": "5 days 18 hours 48 minutes 32 seconds",
      "entry_time": "2022-05-04T10:12:59.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 146,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9932868602",
      "email": "Gh@gmail.com",
      "token": "J 111462248",
      "alien_number": "bz8M79R:680",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111462248",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "bz8M79R:680",
              "created_on": "2022-05-04T11:08:54.000Z",
              "updated_on": "2022-05-10T05:01:50.000Z",
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
      ],
      "Total_time": "5 days 17 hours 52 minutes 56 seconds",
      "entry_time": "2022-05-04T11:08:54.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 147,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9932868602",
      "email": "Hd@gmail.com",
      "token": "J 111472249",
      "alien_number": "13pVEOM:704",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111472249",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "13pVEOM:704",
              "created_on": "2022-05-05T11:09:51.000Z",
              "updated_on": "2022-05-10T05:02:10.000Z",
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
      ],
      "Total_time": "4 days 17 hours 52 minutes 19 seconds",
      "entry_time": "2022-05-05T11:09:51.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 122,
      "first_name": "Ekta",
      "last_name": "Singh",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "ekta.singh@inadev.com",
      "token": "J 111222253",
      "alien_number": "",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111222253",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "",
              "created_on": "2022-05-06T17:07:41.000Z",
              "updated_on": "2022-05-10T05:02:28.000Z",
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
      ],
      "Total_time": "3 days 11 hours 54 minutes 47 seconds",
      "entry_time": "2022-05-06T17:07:41.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 149,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "singhekta20@gmail.com",
      "token": "J 111492254",
      "alien_number": "uUSim4t:745",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111492254",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "uUSim4t:745",
              "created_on": "2022-05-06T17:11:30.000Z",
              "updated_on": "2022-05-10T05:02:44.000Z",
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
      ],
      "Total_time": "3 days 11 hours 51 minutes 14 seconds",
      "entry_time": "2022-05-06T17:11:30.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 151,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9932868602",
      "email": "Bxbzh@gmail.com",
      "token": "J 111512258",
      "alien_number": "aGOvvot:753",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111512258",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "aGOvvot:753",
              "created_on": "2022-05-09T14:25:09.000Z",
              "updated_on": "2022-05-10T05:02:57.000Z",
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
      ],
      "Total_time": "14 hours 37 minutes 48 seconds",
      "entry_time": "2022-05-09T14:25:09.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 152,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "9932868602",
      "email": "Bxbxhd@gmail.com",
      "token": "J 111522259",
      "alien_number": "mRivFOp:755",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111522259",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "mRivFOp:755",
              "created_on": "2022-05-09T14:39:17.000Z",
              "updated_on": "2022-05-10T05:03:14.000Z",
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
      ],
      "Total_time": "14 hours 23 minutes 57 seconds",
      "entry_time": "2022-05-09T14:39:17.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 150,
      "first_name": "Bzbxh",
      "last_name": "Hhshd",
      "isd_code": "+1",
      "phone": "9932868602",
      "email": "Bdbdh@gmail.com",
      "token": "J 111502257",
      "alien_number": "",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111502257",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "",
              "created_on": "2022-05-09T10:32:52.000Z",
              "updated_on": "2022-05-10T05:03:32.000Z",
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
      ],
      "Total_time": "18 hours 30 minutes 40 seconds",
      "entry_time": "2022-05-09T10:32:52.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 122,
      "first_name": "Ekta",
      "last_name": "Singh",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "ekta.singh@inadev.com",
      "token": "J 111222260",
      "alien_number": "",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111222260",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "",
              "created_on": "2022-05-10T10:53:58.000Z",
              "updated_on": "2022-05-10T10:56:35.000Z",
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
      ],
      "Total_time": "2 minutes 37 seconds",
      "entry_time": "2022-05-10T10:53:58.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 122,
      "first_name": "Ekta",
      "last_name": "Singh",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "ekta.singh@inadev.com",
      "token": "J 111222261",
      "alien_number": "fsNZDz5:771",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111222261",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "fsNZDz5:771",
              "created_on": "2022-05-10T11:11:47.000Z",
              "updated_on": "2022-05-10T11:20:37.000Z",
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
      ],
      "Total_time": "8 minutes 50 seconds",
      "entry_time": "2022-05-10T11:11:47.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 122,
      "first_name": "Ekta",
      "last_name": "Singh",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "ekta.singh@inadev.com",
      "token": "J 111222262",
      "alien_number": "nqkY1UG:772",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111222262",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "nqkY1UG:772",
              "created_on": "2022-05-10T11:30:14.000Z",
              "updated_on": "2022-05-10T11:43:52.000Z",
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
      ],
      "Total_time": "13 minutes 38 seconds",
      "entry_time": "2022-05-10T11:30:14.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 149,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "singhekta20@gmail.com",
      "token": "J 111492263",
      "alien_number": "g60RhOl:773",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111492263",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "g60RhOl:773",
              "created_on": "2022-05-10T11:38:36.000Z",
              "updated_on": "2022-05-10T11:44:05.000Z",
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
      ],
      "Total_time": "5 minutes 29 seconds",
      "entry_time": "2022-05-10T11:38:36.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 122,
      "first_name": "Ekta",
      "last_name": "Singh",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "ekta.singh@inadev.com",
      "token": "J 111222264",
      "alien_number": "AtXu3rC:774",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111222264",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "AtXu3rC:774",
              "created_on": "2022-05-10T12:00:17.000Z",
              "updated_on": "2022-05-10T12:11:52.000Z",
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
      ],
      "Total_time": "11 minutes 35 seconds",
      "entry_time": "2022-05-10T12:00:17.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 156,
      "first_name": "Test",
      "last_name": "user",
      "isd_code": "+1",
      "phone": "9195369017",
      "email": "yogesh.asthana@inadev.com",
      "token": "J 111562269",
      "alien_number": "91953-2323-2",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111562269",
              "meeting_room_id": "",
              "meeting_duration": 884,
              "alien_number": "91953-2323-2",
              "created_on": "2022-06-14T14:26:07.000Z",
              "updated_on": "2022-06-14T14:42:54.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111562269",
              "meeting_room_id": null,
              "meeting_duration": 39,
              "alien_number": "91953-2323-2",
              "created_on": "2022-06-14T14:42:17.000Z",
              "updated_on": "2022-06-14T14:44:18.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 3,
              "queue_name": "Oath Administration",
              "token": "J 111562269",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "91953-2323-2",
              "created_on": "2022-06-14T14:44:12.000Z",
              "updated_on": "2022-06-14T14:46:06.000Z",
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
      ],
      "Total_time": "19 minutes 59 seconds",
      "entry_time": "2022-06-14T14:26:07.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 157,
      "first_name": "Yogesh",
      "last_name": "Asthana",
      "isd_code": "+1",
      "phone": "1112222123",
      "email": "test@test.com",
      "token": "J 111572274",
      "alien_number": "23121-2312-3",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111572274",
              "meeting_room_id": "",
              "meeting_duration": 1438521,
              "alien_number": "23121-2312-3",
              "created_on": "2022-06-23T01:43:16.000Z",
              "updated_on": "2022-07-11T11:06:47.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 3,
              "queue_name": "Oath Administration",
              "token": "J 111572274",
              "meeting_room_id": "J1115722741657537654170",
              "meeting_duration": null,
              "alien_number": "23121-2312-3",
              "created_on": "2022-07-11T11:06:36.000Z",
              "updated_on": "2022-07-11T11:09:05.000Z",
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
          }
      ],
      "Total_time": "18 days 9 hours 25 minutes 49 seconds",
      "entry_time": "2022-06-23T01:43:16.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 143,
      "first_name": "ABC",
      "last_name": "ABC",
      "isd_code": "+1",
      "phone": "1234567890",
      "email": "test@test.com",
      "token": "J 111432268",
      "alien_number": "755-5757-5",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111432268",
              "meeting_room_id": "J1114322681657556851982",
              "meeting_duration": 925878,
              "alien_number": "755-5757-5",
              "created_on": "2022-07-01T11:33:30.000Z",
              "updated_on": "2022-07-12T06:50:03.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 3,
              "queue_name": "Oath Administration",
              "token": "J 111432268",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "755-5757-5",
              "created_on": "2022-07-12T06:49:48.000Z",
              "updated_on": "2022-07-12T06:50:29.000Z",
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
          }
      ],
      "Total_time": "10 days 19 hours 16 minutes 59 seconds",
      "entry_time": "2022-07-01T11:33:30.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 122,
      "first_name": "Ekta",
      "last_name": "Singh",
      "isd_code": "+1",
      "phone": "7033627842",
      "email": "ekta.singh@inadev.com",
      "token": "J 111222281",
      "alien_number": "99999-9999-9",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111222281",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "99999-9999-9",
              "created_on": "2022-07-15T06:30:30.000Z",
              "updated_on": "2022-07-15T06:53:43.000Z",
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
      ],
      "Total_time": "23 minutes 13 seconds",
      "entry_time": "2022-07-15T06:30:30.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 161,
      "first_name": "Retest",
      "last_name": "Relast",
      "isd_code": "+1",
      "phone": "7779774586",
      "email": "test@test4mai9l.com",
      "token": "J 111612279",
      "alien_number": "55595-5555-7",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111612279",
              "meeting_room_id": "J1116122791657868523529",
              "meeting_duration": 668,
              "alien_number": "55595-5555-7",
              "created_on": "2022-07-15T06:59:05.000Z",
              "updated_on": "2022-07-15T07:13:02.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111612279",
              "meeting_room_id": "J1116122791657871933270",
              "meeting_duration": 362552,
              "alien_number": "55595-5555-7",
              "created_on": "2022-07-15T07:12:43.000Z",
              "updated_on": "2022-07-19T12:41:21.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
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
          }
      ],
      "Total_time": "58 days 4 hours 59 minutes 22 seconds",
      "entry_time": "2022-07-15T06:59:05.000Z",
      "status": "3",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 155,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "3456789234",
      "email": "Dff@gg.com",
      "token": "J 111552267",
      "alien_number": "vsFrkC1:775",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111552267",
              "meeting_room_id": null,
              "meeting_duration": 4185,
              "alien_number": "vsFrkC1:775",
              "created_on": "2022-07-14T11:05:29.000Z",
              "updated_on": "2022-07-15T07:20:30.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ],
      "Total_time": "59 days 52 minutes 58 seconds",
      "entry_time": "2022-07-14T11:05:29.000Z",
      "status": "3",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 159,
      "first_name": "Test",
      "last_name": "Last",
      "isd_code": "+1",
      "phone": "7777778586",
      "email": "test@testmail.com",
      "token": "J 111592277",
      "alien_number": "55555-5555-5",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111592277",
              "meeting_room_id": null,
              "meeting_duration": 2175,
              "alien_number": "55555-5555-5",
              "created_on": "2022-07-11T10:49:27.000Z",
              "updated_on": "2022-07-15T07:58:24.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111592277",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "55555-5555-5",
              "created_on": "2022-07-15T07:58:19.000Z",
              "updated_on": "2022-07-19T11:59:13.000Z",
              "status": "5",
              "provider_id": 102,
              "message": "Repeated attempts with no response"
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
          }
      ],
      "Total_time": "8 days 1 hours 09 minutes 46 seconds",
      "entry_time": "2022-07-11T10:49:27.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 160,
      "first_name": "Test",
      "last_name": "Last",
      "isd_code": "+1",
      "phone": "7779778586",
      "email": "test@testmai9l.com",
      "token": "J 111602278",
      "alien_number": "55595-5555-9",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111602278",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "55595-5555-9",
              "created_on": "2022-07-11T10:52:23.000Z",
              "updated_on": "2022-07-15T12:02:32.000Z",
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
      ],
      "Total_time": "4 days 1 hours 10 minutes 09 seconds",
      "entry_time": "2022-07-11T10:52:23.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 162,
      "first_name": "R6test",
      "last_name": "R6last",
      "isd_code": "+1",
      "phone": "7779779586",
      "email": "test@test46i9l.com",
      "token": "J 111622295",
      "alien_number": "5595-5555-7",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111622295",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "5595-5555-7",
              "created_on": "2022-07-15T10:52:48.000Z",
              "updated_on": "2022-07-15T14:49:11.000Z",
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
      ],
      "Total_time": "3 hours 56 minutes 23 seconds",
      "entry_time": "2022-07-15T10:52:48.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 154,
      "first_name": "EKTA",
      "last_name": "SINGH",
      "isd_code": "+1",
      "phone": "7896542239",
      "email": "Ggg@445.com",
      "token": "J 111542266",
      "alien_number": "",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111542266",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "",
              "created_on": "2022-05-10T13:38:13.000Z",
              "updated_on": "2022-07-15T14:49:32.000Z",
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
      ],
      "Total_time": "66 days 1 hours 11 minutes 19 seconds",
      "entry_time": "2022-05-10T13:38:13.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 153,
      "first_name": "Test",
      "last_name": "Hhhh",
      "isd_code": "+1",
      "phone": "3456789023",
      "email": "Ggf@334.com",
      "token": "J 111532265",
      "alien_number": "",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111532265",
              "meeting_room_id": "",
              "meeting_duration": null,
              "alien_number": "",
              "created_on": "2022-05-10T13:35:07.000Z",
              "updated_on": "2022-07-19T10:19:56.000Z",
              "status": "5",
              "provider_id": 102,
              "message": "abcd"
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ],
      "Total_time": "69 days 20 hours 44 minutes 49 seconds",
      "entry_time": "2022-05-10T13:35:07.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 158,
      "first_name": "Test1",
      "last_name": "Test1",
      "isd_code": "+1",
      "phone": "1234567890",
      "email": "test@test1.com",
      "token": "J 111582275",
      "alien_number": "11111-1111-9",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111582275",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "11111-1111-9",
              "created_on": "2022-07-18T06:48:39.000Z",
              "updated_on": "2022-07-19T10:20:21.000Z",
              "status": "5",
              "provider_id": 102,
              "message": "abcd"
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ],
      "Total_time": "1 days 3 hours 31 minutes 42 seconds",
      "entry_time": "2022-07-18T06:48:39.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 163,
      "first_name": "R6test",
      "last_name": "R6last",
      "isd_code": "+1",
      "phone": "7779778765",
      "email": "test@kl.com",
      "token": "J 111632298",
      "alien_number": "8888-5555-8",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111632298",
              "meeting_room_id": "J1116322981659603712337",
              "meeting_duration": 37,
              "alien_number": "8888-5555-8",
              "created_on": "2022-08-04T09:01:42.000Z",
              "updated_on": "2022-08-04T09:02:23.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111632298",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "8888-5555-8",
              "created_on": "2022-08-16T07:03:48.000Z",
              "updated_on": "2022-08-16T07:46:48.000Z",
              "status": "5",
              "provider_id": 102,
              "message": ""
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
          }
      ],
      "Total_time": "11 days 22 hours 45 minutes 06 seconds",
      "entry_time": "2022-08-04T09:01:42.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 164,
      "first_name": "fnmeone",
      "last_name": "lnameone",
      "isd_code": "+1",
      "phone": "8897654332",
      "email": "tt@kliu.com",
      "token": "J 111642299",
      "alien_number": "8768-5555-8",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111642299",
              "meeting_room_id": null,
              "meeting_duration": 52,
              "alien_number": "8768-5555-8",
              "created_on": "2022-08-12T05:21:47.000Z",
              "updated_on": "2022-08-12T05:23:27.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 3,
              "queue_name": "Oath Administration",
              "token": "J 111642299",
              "meeting_room_id": "J1116422991662628264001",
              "meeting_duration": null,
              "alien_number": "8768-5555-8",
              "created_on": "2022-08-29T17:27:44.000Z",
              "updated_on": "2022-09-08T09:13:01.000Z",
              "status": "5",
              "provider_id": 102,
              "message": ""
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
          }
      ],
      "Total_time": "27 days 3 hours 51 minutes 14 seconds",
      "entry_time": "2022-08-12T05:21:47.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 165,
      "first_name": "Ayush",
      "last_name": "Kumar",
      "isd_code": "+1",
      "phone": "7787645332",
      "email": "testayush@gmail.com",
      "token": "J 111652349",
      "alien_number": "58585-8888-9",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111652349",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "58585-8888-9",
              "created_on": "2022-08-16T06:59:56.000Z",
              "updated_on": "2022-08-16T07:00:38.000Z",
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
      ],
      "Total_time": "0 minutes 42 seconds",
      "entry_time": "2022-08-16T06:59:56.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 167,
      "first_name": "santhosh",
      "last_name": "s",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "santosh.kumar@inadev.com",
      "token": "J 111672566",
      "alien_number": "58585AHS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111672566",
              "meeting_room_id": null,
              "meeting_duration": 1936,
              "alien_number": "58585AHS4G",
              "created_on": "2022-09-07T08:16:37.000Z",
              "updated_on": "2022-09-07T09:01:53.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111672566",
              "meeting_room_id": "J1116725661662547714521",
              "meeting_duration": 1962,
              "alien_number": "58585AHS4G",
              "created_on": "2022-09-07T10:43:59.000Z",
              "updated_on": "2022-09-07T11:16:44.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111672566",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "58585AHS4G",
              "created_on": "2022-09-11T10:24:25.000Z",
              "updated_on": "2022-09-11T10:24:25.000Z",
              "status": "1",
              "provider_id": null,
              "message": null
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
          }
      ],
      "Total_time": "4 days 3 hours 41 minutes 50 seconds",
      "entry_time": "2022-09-07T08:16:37.000Z",
      "status": "1",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 166,
      "first_name": "Koustav",
      "last_name": "Deb",
      "isd_code": "+1",
      "phone": "7787645399",
      "email": "koustav123@gmail.com",
      "token": "J 111662357",
      "alien_number": "58585-8888-9",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111662357",
              "meeting_room_id": null,
              "meeting_duration": 5947,
              "alien_number": "58585-8888-9",
              "created_on": "2022-09-07T09:35:12.000Z",
              "updated_on": "2022-09-07T11:14:22.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ],
      "Total_time": "4 days 2 hours 23 minutes 15 seconds",
      "entry_time": "2022-09-07T09:35:12.000Z",
      "status": "3",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 168,
      "first_name": "Kishor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "santosh.kuas@inadev.com",
      "token": "J 111682578",
      "alien_number": "9985AHS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111682578",
              "meeting_room_id": null,
              "meeting_duration": 61,
              "alien_number": "9985AHS4G",
              "created_on": "2022-09-07T11:12:27.000Z",
              "updated_on": "2022-09-07T11:15:47.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111682578",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "9985AHS4G",
              "created_on": "2022-09-07T11:15:42.000Z",
              "updated_on": "2022-09-07T14:27:12.000Z",
              "status": "5",
              "provider_id": 102,
              "message": ""
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
          }
      ],
      "Total_time": "3 hours 14 minutes 45 seconds",
      "entry_time": "2022-09-07T11:12:27.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 171,
      "first_name": "Dk",
      "last_name": "Gk",
      "isd_code": "+1",
      "phone": "999999999999",
      "email": "Dk@gk.com",
      "token": "J 111712583",
      "alien_number": "",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111712583",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "",
              "created_on": "2022-09-07T11:53:10.000Z",
              "updated_on": "2022-09-07T14:25:16.000Z",
              "status": "5",
              "provider_id": 102,
              "message": ""
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ],
      "Total_time": "2 hours 32 minutes 06 seconds",
      "entry_time": "2022-09-07T11:53:10.000Z",
      "status": "5",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 178,
      "first_name": "Khor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "kisha#$7ds@tes.com",
      "token": "J 111782590",
      "alien_number": "995ADD5SS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111782590",
              "meeting_room_id": null,
              "meeting_duration": 1145,
              "alien_number": "995ADD5SS4G",
              "created_on": "2022-09-07T16:09:28.000Z",
              "updated_on": "2022-09-08T04:57:51.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ],
      "Total_time": "3 days 19 hours 48 minutes 59 seconds",
      "entry_time": "2022-09-07T16:09:28.000Z",
      "status": "3",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 170,
      "first_name": "Kishor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "santosasash.kuas@inadev.com",
      "token": "J 111702580",
      "alien_number": "9985ADDHS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111702580",
              "meeting_room_id": null,
              "meeting_duration": 30,
              "alien_number": "9985ADDHS4G",
              "created_on": "2022-09-07T11:13:42.000Z",
              "updated_on": "2022-09-08T04:58:37.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111702580",
              "meeting_room_id": null,
              "meeting_duration": 42274,
              "alien_number": "9985ADDHS4G",
              "created_on": "2022-09-08T04:58:19.000Z",
              "updated_on": "2022-09-08T17:04:30.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
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
          }
      ],
      "Total_time": "4 days 44 minutes 45 seconds",
      "entry_time": "2022-09-07T11:13:42.000Z",
      "status": "3",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 172,
      "first_name": "Khor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "kishasd.kuas@inadev.com",
      "token": "J 111722584",
      "alien_number": "9985ADDDHS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111722584",
              "meeting_room_id": null,
              "meeting_duration": 123,
              "alien_number": "9985ADDDHS4G",
              "created_on": "2022-09-07T16:02:24.000Z",
              "updated_on": "2022-09-08T05:19:31.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111722584",
              "meeting_room_id": null,
              "meeting_duration": 19,
              "alien_number": "9985ADDDHS4G",
              "created_on": "2022-09-08T05:19:23.000Z",
              "updated_on": "2022-09-08T09:14:59.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 3,
              "queue_name": "Oath Administration",
              "token": "J 111722584",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "9985ADDDHS4G",
              "created_on": "2022-09-08T09:14:53.000Z",
              "updated_on": "2022-09-08T09:14:59.000Z",
              "status": "1",
              "provider_id": null,
              "message": null
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
          }
      ],
      "Total_time": "3 days 19 hours 56 minutes 03 seconds",
      "entry_time": "2022-09-07T16:02:24.000Z",
      "status": "1",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 169,
      "first_name": "Kishor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "santosash.kuas@inadev.com",
      "token": "J 111692579",
      "alien_number": "9985AHS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111692579",
              "meeting_room_id": "J1116925791662614503144",
              "meeting_duration": 13344,
              "alien_number": "9985AHS4G",
              "created_on": "2022-09-08T05:15:11.000Z",
              "updated_on": "2022-09-08T09:03:46.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111692579",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "9985AHS4G",
              "created_on": "2022-09-09T03:32:57.000Z",
              "updated_on": "2022-09-09T11:23:12.000Z",
              "status": "2",
              "provider_id": 102,
              "message": null
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
          }
      ],
      "Total_time": "3 days 6 hours 43 minutes 16 seconds",
      "entry_time": "2022-09-08T05:15:11.000Z",
      "status": "2",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 173,
      "first_name": "Khor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "kishasd.kuas@testcas.com",
      "token": "J 111732585",
      "alien_number": "9985ADDHS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111732585",
              "meeting_room_id": null,
              "meeting_duration": 121,
              "alien_number": "9985ADDHS4G",
              "created_on": "2022-09-07T16:02:37.000Z",
              "updated_on": "2022-09-08T09:07:48.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 3,
              "queue_name": "Oath Administration",
              "token": "J 111732585",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "9985ADDHS4G",
              "created_on": "2022-09-08T09:07:41.000Z",
              "updated_on": "2022-09-09T03:31:21.000Z",
              "status": "2",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111732585",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "9985ADDHS4G",
              "created_on": "2022-09-11T09:30:15.000Z",
              "updated_on": "2022-09-11T09:30:15.000Z",
              "status": "1",
              "provider_id": null,
              "message": null
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
          }
      ],
      "Total_time": "3 days 19 hours 55 minutes 50 seconds",
      "entry_time": "2022-09-07T16:02:37.000Z",
      "status": "1",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 176,
      "first_name": "Khor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "kishasds@tes.com",
      "token": "J 111762588",
      "alien_number": "995ADD5SS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111762588",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "995ADD5SS4G",
              "created_on": "2022-09-09T03:33:28.000Z",
              "updated_on": "2022-09-09T03:33:28.000Z",
              "status": "1",
              "provider_id": null,
              "message": null
          }
      ],
      "staff_info": [],
      "Total_time": "2 days 8 hours 24 minutes 59 seconds",
      "entry_time": "2022-09-09T03:33:28.000Z",
      "status": "1",
      "staff_fname": "",
      "staff_lname": ""
  },
  {
      "id": 179,
      "first_name": "Khor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "newfortestds@tes.com",
      "token": "J 111792610",
      "alien_number": "999999-999",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111792610",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "999999-999",
              "created_on": "2022-09-09T03:33:40.000Z",
              "updated_on": "2022-09-09T03:33:40.000Z",
              "status": "1",
              "provider_id": null,
              "message": null
          }
      ],
      "staff_info": [],
      "Total_time": "2 days 8 hours 24 minutes 47 seconds",
      "entry_time": "2022-09-09T03:33:40.000Z",
      "status": "1",
      "staff_fname": "",
      "staff_lname": ""
  },
  {
      "id": 175,
      "first_name": "Khor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "kishasd.kuas@tes.com",
      "token": "J 111752587",
      "alien_number": "9985ADD5SS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111752587",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "9985ADD5SS4G",
              "created_on": "2022-09-09T10:06:47.000Z",
              "updated_on": "2022-09-09T10:06:47.000Z",
              "status": "1",
              "provider_id": null,
              "message": null
          }
      ],
      "staff_info": [],
      "Total_time": "2 days 1 hours 51 minutes 40 seconds",
      "entry_time": "2022-09-09T10:06:47.000Z",
      "status": "1",
      "staff_fname": "",
      "staff_lname": ""
  },
  {
      "id": 177,
      "first_name": "Khor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "kisha#$sds@tes.com",
      "token": "J 111772589",
      "alien_number": "995ADD5SS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111772589",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "995ADD5SS4G",
              "created_on": "2022-09-09T03:33:15.000Z",
              "updated_on": "2022-09-11T08:41:11.000Z",
              "status": "2",
              "provider_id": 102,
              "message": null
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ],
      "Total_time": "2 days 8 hours 25 minutes 12 seconds",
      "entry_time": "2022-09-09T03:33:15.000Z",
      "status": "2",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 174,
      "first_name": "Khor",
      "last_name": "Sarkar",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "kishasd.kuas@testcaas.com",
      "token": "J 111742586",
      "alien_number": "9985ADDHS4G",
      "assinged_queue": [
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111742586",
              "meeting_room_id": null,
              "meeting_duration": 64281,
              "alien_number": "9985ADDHS4G",
              "created_on": "2022-09-10T16:29:56.000Z",
              "updated_on": "2022-09-11T10:24:03.000Z",
              "status": "3",
              "provider_id": 102,
              "message": null
          },
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111742586",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "9985ADDHS4G",
              "created_on": "2022-09-11T10:23:57.000Z",
              "updated_on": "2022-09-11T10:24:03.000Z",
              "status": "1",
              "provider_id": null,
              "message": null
          }
      ],
      "staff_info": [
          {
              "provider_id": 102,
              "provider_first_name": "Varun",
              "provider_last_name": "Sengupta",
              "agent_id": "A607093"
          }
      ],
      "Total_time": "19 hours 28 minutes 31 seconds",
      "entry_time": "2022-09-10T16:29:56.000Z",
      "status": "1",
      "staff_fname": "Varun",
      "staff_lname": "S"
  },
  {
      "id": 181,
      "first_name": "test",
      "last_name": "new",
      "isd_code": "+1",
      "phone": "9600799441",
      "email": "newfortestds@mail.in",
      "token": "J 111812619",
      "alien_number": "11111-11111",
      "assinged_queue": [
          {
              "queue_id": 2,
              "queue_name": "Interview",
              "token": "J 111812619",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "11111-11111",
              "created_on": "2022-09-11T10:24:42.000Z",
              "updated_on": "2022-09-11T10:24:42.000Z",
              "status": "1",
              "provider_id": null,
              "message": null
          },
          {
              "queue_id": 1,
              "queue_name": "Adjudication",
              "token": "J 111812619",
              "meeting_room_id": null,
              "meeting_duration": null,
              "alien_number": "11111-11111",
              "created_on": "2022-09-11T06:48:15.000Z",
              "updated_on": "2022-09-11T10:25:01.000Z",
              "status": "2",
              "provider_id": 102,
              "message": null
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
console.log("indexOf", Fruit.indexOf("mango"));
for (const key in Fruit) {
  console.log(key);
}
console.log(Fruit);
// for (let index = 0; index < Fruit.length; index++) {
//   const element = Fruit[index];
//   element.toUpperCase()
//   console.log(element);
//   let newele = document.createElement("label")
//   let footerSection = document.getElementById("footer-section")
//   footerSection.append(newele.innerText=element)


// }

Fruit = Fruit.sort().reverse()
for (const fruit of Fruit) {
  console.log(fruit);

}
//Array .map

let newNUm = Array.from({ length: 120 }, () => Math.floor(Math.random() * 40));
console.log(newNUm);
let squress = newNUm.map(squre)
let quebes = newNUm.map(qube)

quebes.forEach(print)

function squre(params) {
  return Math.pow(params, 2)

}

function print(params) {
  console.log(params);

}

function qube(params) {
  return Math.pow(params, 3)

}




//Array.Filter




let ages = Array.from({ length: 112 }, () => Math.floor(Math.random() * 40));
console.log(ages);
let adults = ages.filter(checkAge)
console.log("Array.Filter method Filter aged more then 18");

adults.forEach(display)

function checkAge(params) {
  return params >= 18;

}
function display(element) {
  console.log(element);


}
// Array.reduce()

console.warn("Array.reduce() Method Log");
let prices = Array.from({ length: 112 }, () => Math.floor(Math.random() * 400) + 100);
console.log(prices);

let total = prices.reduce(checkOut);
console.log(`Total is $ ${total}`);
function checkOut(total, params) {
  return total + params;


}

//shot array
// console.log(prices.sort());

console.log(prices);


let pointdes = prices.sort(sortdec)
pointdes.forEach(showmarks)

let pointase = prices.sort(sortase)
pointase.forEach(showmarks)

function sortdec(x, y) {
  return y - x;


}


function sortase(x, y) {
  return x - y;


}

function showmarks(params) {
  console.log(params);

}
function millisecondsToStr(milliseconds) {
  let temp = milliseconds / 1000;
  let years = Math.floor(temp / 31536000),
    days = Math.floor((temp %= 31536000) / 86400),
    hours = Math.floor((temp %= 86400) / 3600),
    minutes = Math.floor((temp %= 3600) / 60),
    seconds = temp % 60;
    if (seconds>30) {
      minutes +=1
      
    }else{
      minutes -=1
    }

  if (days || hours || seconds || minutes) {
    return (years ? years + " years " : "") +
      (days ? days + " days " : "") +
      (hours ? hours + " hours " : "") +
      (minutes ? minutes + " mimutes" : "")
  }

  return "0";
}

let difference;
let newarray;
let DateArray = "";
let arr = []
let d1, d2;
let lastqueue; 
let message, statusName,staff;
result.forEach(element => {
  element.assinged_queue.forEach(Object => {
    d1 = new Date(Object.created_on);
    d2 = new Date(Object.updated_on)
    difference = d2 - d1;
    Object["newTime"] = difference;
    
  });
  // lastqueue = element.assinged_queue.slice(-1);
  // console.log("...lastqueue",
//     {  ...lastqueue }
//  )
  // console.log(lastqueue);
  //  message = lastqueue.map(o => o.message)

  console.log(element["message"]);
  let totalTime = element.assinged_queue.reduce((n, { newTime }) => n + newTime, 0);
  totalTime = (millisecondsToStr(totalTime));
  element["totalTime"] = totalTime;
  element["message"]= message;
  if (element.status == 5) {
    element["statusName"] = "Completed"

  }else if(element.status == 2) {
    element["statusName"] = "Inservice"

  }else if(element.status == 1) {
    element["statusName"] = "Waiting"

  }else{
    element["statusName"] = "Waiting"
  }
});
console.log(result);