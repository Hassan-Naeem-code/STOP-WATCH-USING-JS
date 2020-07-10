console.log('Muhammad Hassan Naeem');
var hours = document.getElementById('hour');
var minutes = document.getElementById('minute');
var second = document.getElementById('second');
let milliSecond = document.getElementById('milliSecond');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let i = 0;
let j = 1;
let k = 1;
let l = 1;
let interval;

function stopWatch() {
    console.log(i);
    if (i == 59) {
        second.innerHTML = `:${j}`;
        j++;
        i = 0;
    } else if (j == 59) {
        minutes.innerHTML = `:${k}`;
        k++;
        j = 0;
        i = 0;
    } else if (k == 59) {
        hours.innerHTML = `:${l}`;
        l++;
        i = 0;
        j = 0;
        k = 0;
    } else {
        milliSecond.innerHTML = `:${i}`;
        i++;
    }
}

function start() {
    interval = setInterval(stopWatch, 20);
    startBtn.disabled = true;
}

function stop() {
    clearInterval(interval);
    startBtn.disabled = false;
}

function reset() {
    milliSecond.innerHTML = 0;
    second.innerHTML = 0;
    minutes.innerHTML = 0;
    hours.innerHTML = 0;
    i = 0;
    j = 1;
    k = 1;
    l = 1;
    startBtn.disabled = false;
    clearInterval(interval);
}
