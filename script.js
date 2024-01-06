const numberHoursEl = document.querySelector(".number-hours");
const barSecondsEl = document.querySelector(".bar-seconds");

let numberElement = [];
let barElement = [];

for (let i = 1; i <= 12; i++) {
  numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}

numberHoursEl.insertAdjacentHTML("afterbegin", numberElement.join(""));

for (let i = 1; i <= 60; i++) {
  barElement.push(`<span style="--index:${i};"><p></p></span>`);
}

barSecondsEl.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

function getCurrentTime() {
  let date = new Date();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();

  handHours.style.transform = `rotate(${
    currentHours * 30 + currentMinutes / 2
  }deg)`;
  handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
  handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

getCurrentTime();
setInterval(() => {
  getCurrentTime();
}, 1000);

// color change logic
const neonColors = [
  "#00ff00",
  "#00ffaa",
  "#00aaff",
  "#ff00aa",
  "#ffaa00",
  "#aaff00",
  "#00ffff",
  "#ff00ff",
  "#aa00ff",
  "#ffaa00",
  "#00ff00",
  "#00ffaa",
  "#00aaff",
  "#ff00aa",
  "#ffaa00",
  "#aaff00",
  "#00ffff",
  "#ff00ff",
  "#aa00ff",
  "#ffaa00",
  "#00ff0a",
  "#00f0aa",
  "#00aaf1",
  "#ff00ab",
  "#ffba00",
  "#abff00",
  "#00ffee",
  "#ff00ee",
  "#aa00fe",
  "#ffee00",
  "#0aff00",
  "#00ffac",
  "#00acff",
  "#ffacaa",
  "#ffaaac",
  "#acff00",
  "#0affff",
  "#ff00ff",
  "#af00ff",
  "#ffaf00",
  "#aaff0a",
  "#0affaa",
  "#0aaff1",
  "#ff0aab",
  "#fbaa00",
  "#abbf00",
  "#00fffe",
  "#ff0eee",
  "#aea0fe",
  "#fefe00",
  "#00f00f",
  "#00fefc",
  "#0ac1ff",
  "#fe0aeb",
  "#e6fe0a",
  "#eaff00",
  "#00fefe",
  "#ff00fe",
  "#afc0ff",
  "#ffea00",
  "#e0ff00",
  "#f0ffac",
  "#a0acff",
  "#ffabaa",
  "#ffbaac",
  "#ac0fff",
  "#00fbfe",
  "#ff0fef",
  "#afafee",
  "#fefeaf",
  "#313131",
  "#fefefe",
  "#fafafa",
  "#f1f1f1",
];

function changeColors() {
  const allElements = document.querySelectorAll(".number-hours span p");
  const hourHandElements = document.querySelector(".hands-box .hours i");
  const minuteHandElements = document.querySelector(".hands-box .minutes i");
  const srcondsBarsElements = document.querySelectorAll(".bar-seconds span p");

  const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];

  hourHandElements.style.backgroundColor = randomColor;
  hourHandElements.style.boxShadow = `0 0 10px ${randomColor}`;

  minuteHandElements.style.backgroundColor = randomColor;
  minuteHandElements.style.boxShadow = `0 0 10px ${randomColor}`;

  srcondsBarsElements.forEach((element) => {
    element.style.backgroundColor = randomColor;
    element.style.boxShadow = `0 0 10px ${randomColor}`;
  });

  allElements.forEach((element) => {
    element.style.color = randomColor;
    element.style.textShadow = `0 0 10px ${randomColor}`;
  });
}

setInterval(() => {
  changeColors();
}, 1000);

