let blink = true;
const TIME_EL = document.getElementById("clock");
const DATE_EL = document.getElementById("date");
const DAYS_EL = document.getElementById("days");
const OBJECT_EL = document.getElementById("object");
const LOADER_EL = document.getElementById("loader");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


OBJECT_EL.addEventListener("animationend", () => {
    LOADER_EL.style.animation = "load2 1s linear  both";
}, false);


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
    const date1 = new Date();
    const seconds = units(date1.getSeconds());
    const minutes = units(date1.getMinutes());
    const hours = units(date1.getHours());
    TIME_EL.innerHTML = `${blinkAnimation(hours, minutes, seconds)}`;
}

setInterval(() => {
    all();
}, 1000);

function changeDate() {

    const date2 = new Date();
    const days = units(date2.getDate());
    const months = units(date2.getMonth() + 1);
    const years = units(date2.getFullYear());
    DATE_EL.innerHTML = `${days}-${months}-${years}`;
}

function changeDay() {
    const date3 = new Date();
    const weekDay = weekday[date3.getDay()];
    DAYS_EL.innerHTML = `${weekDay}`;
}

function all() {
    changeTime();
    changeDate();
    changeDay();

}

all();
