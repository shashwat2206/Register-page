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
function EmailValidation(input){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
}
function checkPassword(input){
    const formContainer = input.length;
    if (formContainer > 6){
        return true;
    }
}
function checkSimilarity(input){
    if (password === input){
        return true;
    }
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
        showError(email , 'Email is required');
    }   else if(!EmailValidation(email.value)){
        showError(email , "Email is not valid");
    }   else {
        showSuccess(email);
    }
    if (password.value === ''){
        showError(password , 'Password is required');
    } else if(!checkPassword(password.value)){
        showError(password , 'The length of ur password is too small');
    }else {
        showSuccess(password);
    }
    if (password2.value === ''){
    showError(password2 , 'Password2 is required')
    }else if (password2.value != password.value){
        showError(password2 , 'Passwords do not match')
    }else {
        showSuccess(password2)
    }

})