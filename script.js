const sec = document.getElementById("sec");
const milisec = document.getElementById("milisec");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let seconds = 0;
let milisecond = 0;
let timeInterval;

const timer = () => {
  milisecond++;

  if (milisecond < 9) {
    milisec.innerText = "0" + milisecond;
  }

  if (milisecond > 9) {
    milisec.innerText = milisecond;
  }
  if (milisecond > 99) {
    seconds++;
    sec.innerText = "0" + seconds;
    milisecond = 0;
    milisec.innerText = "0" + 0;
  }

  if (seconds > 9) {
    sec.innerText = seconds;
  }
};

start.addEventListener("click", () => {
  timeInterval = setInterval(timer, 10);
});

stop.addEventListener("click", () => {
  clearInterval(timeInterval);
});

reset.addEventListener("click", () => {
  clearInterval(timeInterval);
  seconds = "00";
  milisecond = "00";
  sec.innerText = seconds;
  milisec.innerText = milisecond;
});
