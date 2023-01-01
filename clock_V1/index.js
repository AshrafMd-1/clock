let blink = true;
const TIME_EL = document.getElementById("clock");
function units(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

function blinkAnimation(h, m, s) {
  if (blink) {
    blink = false;
    return `${h} ${m} ${s}`;
  } else {
    blink = true;
    return `${h}:${m}:${s}`;
  }
}

function changeTime() {
  const date = new Date();
  const seconds = units(date.getSeconds());
  const minutes = units(date.getMinutes());
  const hours = units(date.getHours());

  const time = blinkAnimation(hours, minutes, seconds);
  TIME_EL.innerHTML = time;
}

setInterval(() => {
  changeTime();
}, 1000);

changeTime();
