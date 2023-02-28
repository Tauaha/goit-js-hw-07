const form = document.querySelector('.login-form');
//console.dir(formEl);
form.addEventListener('submit', onSubmitForm);

function onSubmitForm (event){
    event.preventDefault();
        const formElements = event.currentTarget.elements;
        const mail = formElements.email.value;
        const password = formElements.password.value;
        const formData ={
            mail, 
            password,
        }

        if (mail === "" || password === "") {
            alert(`Всі поля повинні бути заповненні`);
        } else {
        console.log(formData);
        }
    
    form.reset();
    }
    


