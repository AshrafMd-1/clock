// All the elements that we need to update
const HOUR_EL = document.getElementById("act-hour");
const MINUTE_EL = document.getElementById("act-minute");
const SECOND_EL = document.getElementById("act-second");
const DATE_EL = document.getElementById("act-date");
const MONTH_EL = document.getElementById("act-month");
const YEAR_EL = document.getElementById("act-year");
const DAY_EL = document.getElementById("act-day");
const AM_PM_btn = document.getElementById("am-pm");
const SINGLE_DIGIT_BTN = document.getElementById("single-digit");
const MONTH_STRING_BTN = document.getElementById("month-string");
const DAY_STRING_BTN = document.getElementById("day-string");
// Number to string conversion
const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Settings of the clock
let isAmPm = false;
let isMonthString = false;
let isDayString = false;
let isSingleDigit = false;
// Toggle settings for the clock
SINGLE_DIGIT_BTN.addEventListener("click", () => {
    if (isSingleDigit) {
        SINGLE_DIGIT_BTN.textContent = "Single Digit";
    } else {
        SINGLE_DIGIT_BTN.textContent = "Double Digit";
    }
    isSingleDigit = !isSingleDigit;
    updateClock();
});
MONTH_STRING_BTN.addEventListener("click", () => {
    if (isMonthString) {
        MONTH_STRING_BTN.textContent = "Month String";

    } else {
        MONTH_STRING_BTN.textContent = "Month Number";
    }
    isMonthString = !isMonthString;
    updateClock();
});
DAY_STRING_BTN.addEventListener("click", () => {
    if (isDayString) {
        DAY_STRING_BTN.textContent = "Day String";
    } else {
        DAY_STRING_BTN.textContent = "Day Number";
    }
    isDayString = !isDayString;
    updateClock();
});
AM_PM_btn.addEventListener("click", () => {
    if (isAmPm) {
        AM_PM_btn.innerHTML = "AM/PM";
    } else {
        AM_PM_btn.innerHTML = "24H";
    }
    isAmPm = !isAmPm;
    updateClock();
});

// Functions

function unitFormat(time) {
    return time < 10 ? `0${time}` : time;
}

function changeTime(now) {
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let amPm = "";
    if (isAmPm) {
        if (hour > 12) {
            hour = hour - 12;
        } else if (hour === 0) {
            hour = 12;
        }
        amPm = now.getHours() >= 12 ? "PM" : "AM";
    }
    if (!isSingleDigit) {
        hour = unitFormat(hour);
        minute = unitFormat(minute);
        second = unitFormat(second);
    }
    HOUR_EL.innerHTML = `${hour}`;
    MINUTE_EL.innerHTML = `${minute}`;
    SECOND_EL.innerHTML = `${second}  ${amPm}`;
}


function changeDate(now) {
    YEAR_EL.innerHTML = `${now.getFullYear()}`;
    if (isMonthString) {
        MONTH_EL.innerHTML = MONTHS[now.getMonth()];
    } else if (isSingleDigit) {
        MONTH_EL.innerHTML = `${now.getMonth() + 1}`;
    } else {
        MONTH_EL.innerHTML = unitFormat(now.getMonth() + 1);
    }
    if (isSingleDigit) {
        DATE_EL.innerHTML = `${now.getDate()}`;
    } else {
        DATE_EL.innerHTML = unitFormat(now.getDate());
    }
}

function changeDay(now) {
    if (isDayString) {
        DAY_EL.innerHTML = WEEK_DAYS[now.getDay()];
    } else if (isSingleDigit) {
        DAY_EL.innerHTML = `${now.getDate()}`;
    } else {
        DAY_EL.innerHTML = unitFormat(now.getDay() + 1);
    }
}

function updateClock() {
    const now = new Date();
    changeTime(now);
    changeDate(now);
    changeDay(now);
}

setInterval(updateClock, 1000);
updateClock();