const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxesDiv = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes() {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    let initialBoxSize = 30;
    let boxSizeIncrement = 10;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${initialBoxSize}px`;
      box.style.height = `${initialBoxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
      initialBoxSize += boxSizeIncrement;
    }

    input.value = "";
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);


