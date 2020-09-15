const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
function showError(input, message ){
    const formContainer = input.parentElement;
    formContainer.className = 'form-container error';
    const small = formContainer.querySelector('small');
    small.innerText = message;
}
function showSuccess(input){
    const formContainer = input.parentElement;
    formContainer.className = 'form-container success';

}

form.addEventListener('submit' , function(e){
    e.preventDefault()
    if (username.value === ''){
    showError(username , 'Username is required')
    }else {
        showSuccess(username)
    }
    if (username.value === ''){
    showError(username , 'Username is required')
    }else {
        showSuccess(username)
    }
    if (email.value === ''){
    showError(email , 'Email is required')
    }else {
        showSuccess(email)
    }
    if (password.value === ''){
    showError(password , 'Password is required')
    }else {
        showSuccess(password)
    }
    if (password2.value === ''){
    showError(password2 , 'Password2 is required')
    }else {
        showSuccess(password2)
    }

})