//Website header and Title text

let webtitle = document.getElementById("webtiele")
let title = document.getElementById("title");
const titleString="Math Web App"
title.innerText=titleString;
webtitle.innerText=titleString;
console.log(titleString);



//let x = 3.14;

//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


x = Math.PI;
console.log(x);

milliseconds = 1936*1000;
mydate=new Date(milliseconds);
humandate=mydate.getUTCHours()+" h, "+mydate.getUTCMinutes()+" m "+mydate.getUTCSeconds()+" s" ;

console.log(humandate);

timeConversion(1936*1000);

function timeConversion(millisec) {

    var seconds = (millisec / 1000).toFixed(1);

    var minutes = (millisec / (1000 * 60)).toFixed(1);

    var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

    var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

    if (seconds < 60) {
        return seconds + " Sec";
    } else if (minutes < 60) {
        return minutes + " Min";
    } else if (hours < 24) {
        return hours + " Hrs";
    } else {
        return days + " Days"
    }
}


function millisecondsToStr( milliseconds ) {
    let temp = milliseconds / 1000;
    const years = Math.floor( temp / 31536000 ),
          days = Math.floor( ( temp %= 31536000 ) / 86400 ),
          hours = Math.floor( ( temp %= 86400 ) / 3600 ),
          minutes = Math.floor( ( temp %= 3600 ) / 60 ),
          seconds = temp % 60;

    if ( days || hours || seconds || minutes ) {
      return ( years ? years + "y " : "" ) +
      ( days ? days + "d " : "" ) +
      ( hours ? hours + "h " : ""  ) +
      ( minutes ? minutes + "m " : "" ) +
      Number.parseFloat( seconds )+ "s";
    }

    return "< 1s";
}
console.log(millisecondsToStr( 193236*1000 ));
console.log( millisecondsToStr( 351338536000 ));
