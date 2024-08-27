const arr = [1, 2, 3, 4, 5, 6, 7, 8, "A", "B", "C", "F", "G"];

let btn = document.querySelector(".btn");
let card = document.querySelector(".card");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += arr[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * arr.length);
}
