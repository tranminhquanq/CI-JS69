const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

let currentTime = 0;

timeEl.textContent = formatSecond(currentTime);

let interval;

function formatSecond(seconds) {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  let time = "";

  if (m < 10 && s < 10) {
    time = `0${m}:0${s}`;
  } else if (s < 10 && m >= 10) {
    time = `${m}:0${s}`;
  } else if (s >= 10 && m < 10) {
    time = `0${m}:${s}`;
  } else {
    time = `${m}:${s}`;
  }
  return time;
}

startBtn.addEventListener("click", () => {
  if (interval) {
    return;
  }

  interval = setInterval(() => {
    currentTime++;
    timeEl.textContent = formatSecond(currentTime);
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }
});

stopBtn.addEventListener("click", () => {
  currentTime = 0;
  timeEl.textContent = formatSecond(currentTime);
  if (interval) {
    clearInterval(interval);
  }
});

const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

let currentTime = 0;

timeEl.textContent = formatSecond(currentTime);

let interval;

function formatSecond(seconds) {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  let time = "";

  if (m < 10 && s < 10) {
    time = `0${m}:0${s}`;
  } else if (s < 10 && m >= 10) {
    time = `${m}:0${s}`;
  } else if (s >= 10 && m < 10) {
    time = `0${m}:${s}`;
  } else {
    time = `${m}:${s}`;
  }
  return time;
}

startBtn.addEventListener("click", () => {
  if (interval) {
    return;
  }

  interval = setInterval(() => {
    currentTime++;
    timeEl.textContent = formatSecond(currentTime);
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }
});

stopBtn.addEventListener("click", () => {
  currentTime = 0;
  timeEl.textContent = formatSecond(currentTime);
  if (interval) {
    clearInterval(interval);
  }
});
