const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlEl.addEventListener('input', resizeFont);

function resizeFont (event){
textEl.style.fontSize = event.currentTarget.value + 'px';
}