
   const inputEl = document.querySelector('#validation-input');
    

inputEl.addEventListener('blur', checkContentForm);
console.log(inputEl.dataset.length);

function checkContentForm (event){
if (event.currentTarget.value >= Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
 
} else {
   
  inputEl.classList.add('invalid');
 
}
}

