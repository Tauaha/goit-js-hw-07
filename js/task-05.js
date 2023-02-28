
const refs = {
     inputEl: document.querySelector('#name-input'),
    userNameEl: document.querySelector('#name-output')
};
refs.inputEl.addEventListener('input', updateinputName);
function updateinputName(event){
    if (event.currentTarget.value === "") {
            return refs.userNameEl.textContent = `Anonymous`;
        } else {
            return refs.userNameEl.textContent = event.currentTarget.value;
        };
}


