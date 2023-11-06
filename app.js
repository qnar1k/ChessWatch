let minutes1 = 9, minutes2 = 9;
let seconds1 = 60, seconds2 = 60;
let appendMinutesOne = document.querySelector(".minutesOne");
let appendSecondsOne = document.querySelector(".secondsOne");
let appendMinutesTwo = document.querySelector(".minutesTwo");
let appendSecondsTwo = document.querySelector(".secondsTwo");
let playerOne = document.querySelector(".playerOne");
let playerTwo = document.querySelector(".playerTwo");
let Interval;

playerOne.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(timer1, 1000);
})
playerTwo.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(timer2, 1000);
})

function timer1() {
    seconds1--;
    if (seconds1 > 9) {
        appendSecondsOne.innerHTML = seconds1;
    }
    if (seconds1 <= 9) {
        appendSecondsOne.innerHTML = "0" + seconds1;
    }
    if (seconds1 < 0) {
        minutes1--;
        appendMinutesOne.innerHTML = "0" + minutes1;
        seconds1 = 59;
        appendSecondsOne.innerHTML = seconds1;
    }
    if (minutes1 < 10) {
        appendMinutesOne.innerHTML = "0" + minutes1;
    }
    if(minutes1 === 0 && seconds1 === 0){
        clearInterval(Interval);
    }
}

function timer2() {
    seconds2--;
    if (seconds2 > 9) {

        appendSecondsTwo.innerHTML = seconds2;
    }
    if (seconds2 <= 9) {
        appendSecondsTwo.innerHTML = "0" + seconds2;
    }
    if (seconds2 < 0) {
        minutes2--;
        appendMinutesTwo.innerHTML = "0" + minutes2;
        seconds2 = 59;
        appendSecondsTwo.innerHTML = seconds2;
    }
    if (minutes2 < 10) {
        appendMinutesTwo.innerHTML = "0" + minutes2;
    }
    if(minutes2 === 0 && seconds2 === 0){
        clearInterval(Interval);

    }
}















