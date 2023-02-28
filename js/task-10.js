function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", onBtnCreateClickHandler);
destroyBtnEl.addEventListener("click", destroyBoxes);

let divBoxWidth = 20;
let divBoxHeight = 20;
const arrayEl =[];

function createBoxes(amount){
for (let i = 0; i < amount; i++) {
  const amount = inputEl.value;
  divBoxWidth += 10;
  divBoxHeight += 10;

  const divEl = document.createElement('div');
  divEl.style.width = `${divBoxWidth}px`;
  divEl.style.height =`${divBoxHeight}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  arrayEl.push(divEl);
}
boxesEl.append(...arrayEl);
}

function onBtnCreateClickHandler() {
  createBoxes(inputEl.value);
}

function destroyBoxes(event){
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
