const time = document.getElementById("time");
const plays = document.getElementById("plays");
const pause = document.getElementById("pause");
const stops = document.getElementById("stop");
const play = document.getElementById("play");
const answer = document.getElementById("answer");

let min;
let soat;
let sek;

let clear;
let mum = true;

function set() {
  clear = setInterval(() => {
    if (sek > 0) {
      sek--;
      if (sek == 0) {
        if (min > 0) {
          sek = 60;
          if (min == 0) {
            if (soat > 0) {
              min = 60;
              if (soat == 0) {
                mum = false;
              }
              soat--;
            } else {
              mum = false;
            }
          }
          min--;
        } else if (min == 0) {
          if (soat > 0) {
            min = 60;
            if (soat == 0) {
              mum = false;
            }
            soat--;
          } else {
            mum = false;
          }
        }
      }
    } else if (sek == 0) {
      if (min > 0) {
        sek = 60;
        if (min == 0) {
          if (soat > 0) {
            min = 60;
            if (soat == 0) {
            }
            soat--;
          } else {
            if (min == 0) {
              if (soat > 0) {
                min = 60;
                if (soat == 0) {
                  mum = false;
                }
                soat--;
              } else {
                mum = false;
              }
            }
          }
        }
        min--;
      } else {
        if (soat > 0) {
          min = 60;
          if (soat == 0) {
          }
          soat--;
        } else {
          if (min == 0) {
            if (soat > 0) {
              min = 60;
              if (soat == 0) {
                mum = false;
              }
              soat--;
            } else {
              mum = false;
            }
          }
        }
      }
    } else {
    }
    let g = soat + ":" + min + ":" + sek;
    answer.innerText = g;
  }, 1000);
}

plays.addEventListener("click", () => {
  plays.style.display = "none";
  let res = time.value;
  let arr_res = res.split(":");
  soat = Number(arr_res[0]);
  min = Number(arr_res[1]);
  sek = Number(arr_res[2]);
  set();
  pause.style.display = "block";
  stops.style.display = "block";
});

pause.addEventListener("click", () => {
  pause.style.display = "none";
  play.style.display = "block";
  clearInterval(clear);
});

play.addEventListener("click", () => {
  play.style.display = "none";
  pause.style.display = "block";
  set();
});

stops.addEventListener("click", () => {
  play.style.display = "none";
  pause.style.display = "none";
  stops.style.display = "none";
  plays.style.display = "block";
  clearInterval(clear);
  answer.innerText = "";
});
