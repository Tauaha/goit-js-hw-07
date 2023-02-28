
   const inputEl = document.querySelector('#validation-input');
    

inputEl.addEventListener('blur', checkContentForm);
console.log(inputEl.dataset.length);

function checkContentForm (event){
if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
 
} else {
   
  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');
}
}

