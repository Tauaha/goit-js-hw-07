function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('button');

btn.addEventListener('click', updateColor);

function updateColor (event){
  const body = document.querySelector('body');
  const nameColorEl = document.querySelector('.color');
body.style.backgroundColor = getRandomHexColor();
console.log(nameColorEl);
nameColorEl.textContent = body.style.backgroundColor;
console.dir(body);
}
