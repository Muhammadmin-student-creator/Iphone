let time = document.getElementById("time");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const end = document.getElementById("end");
const con = document.getElementById("continue");

let minuts = 00;
let hours = 00;
let sekund = 00;
let clear;

function callInterval() {
  clear = setInterval(() => {
    sekund++;
    if (sekund >= 60) {
      sekund = 0;
      minuts++;
    }
    if (minuts >= 60) {
      minuts = 0;
      hours++;
    }
    let res = hours + ":" + minuts + ":" + sekund;
    time.innerText = res;
  }, 1000);
}

play.addEventListener("click", () => {
  pause.style.display = "block";
  play.style.display = "none";
  callInterval();
});

pause.addEventListener("click", () => {
  end.style.display = "block";
  con.style.display = "block";
  pause.style.display = "none";
  clearInterval(clear);
});

con.addEventListener("click", () => {
  pause.style.display = "block";
  end.style.display = "none";
  con.style.display = "none";
  callInterval();
});

end.addEventListener("click", () => {
  end.style.display = "none";
  con.style.display = "none";
  play.style.display = "block";
  minuts = 00;
  hours = 00;
  sekund = 00;
  let res = hours + ':' + minuts + ':' +  sekund  ;
  time.innerText = res;
});
