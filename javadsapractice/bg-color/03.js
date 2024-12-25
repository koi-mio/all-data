// const startButton = document.getElementById("start-button");

// startButton.addEventListener("click", () => {
//   const randomColor = getRandomColor();
//   document.body.style.backgroundColor = randomColor;
// });

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  return intervalId;
};

const stopChangingColor = function (intervalId) {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", function () {
  let intervalId = startChangingColor();
  document.querySelector("#stop").addEventListener("click", function () {
    stopChangingColor(intervalId);
  });
});
