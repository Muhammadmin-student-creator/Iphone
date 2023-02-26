let alarm = document.getElementById("btn");
let modal = document.getElementById("modal");
const time = document.getElementById("time");
const audio = document.getElementById("audio");
const pause = document.getElementById("pause");
const body = document.getElementById("body");
const ok = document.getElementById("ok");
const newB = document.getElementById("newB");
ok.addEventListener("click", () => {
  localStorage.setItem("time", time.value);
  let body__kol = localStorage.getItem("time");
  body.innerHTML = `
    <div id="newB">
      <p>${body__kol}</p>
      <p>Будильник</p>
    </div>
  `;
});

setInterval(() => {
  let date = new Date();
  if (time.value === date.toLocaleTimeString("it-IT")) {
    pause.style.display = "block";
    audio.play();
    newB.style.display = "none";
  }
  pause.addEventListener("click", () => {
    audio.pause();
    pause.style.display = "none";
    newB.style.display = "block";
  });
}, 1000);

alarm.addEventListener("click", function () {
  modal.style.top = "0";
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 500);
});

const close = document.getElementById("close");
const add = document.getElementById("ok");

close.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.top = "-100%";
});

add.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.top = "-100%";
});
