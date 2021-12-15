let myName = prompt("Lütfen isminizi giriniz");
document.querySelector("#myName").innerHTML = myName;

function showTime() {
  const myClock = document.querySelector("#myClock");
  
  const date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hour = date.getHours();

  let dayName = date.getDay()-1;


  switch (dayName) {
    case 0:
      dayName = "Pazartesi";
      break;
    case 1:
      dayName = "Salı";
      break;
    case 2:
      dayName = "Çarşamba";
      break;
    case 3:
      dayName = "Perşembe";
      break;
    case 4:
      dayName = "Cuma";
      break;
    case 5:
      dayName = "Cumartesi";
      break;
    case 6:
      dayName = "Pazar";
      break;
  }


  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hour = hour < 10 ? "0" + hour : hour;

  myClock.innerHTML = hour + ":" + min + ":" + sec + "\t" + dayName;

  setTimeout(showTime, 1000);
}

showTime();