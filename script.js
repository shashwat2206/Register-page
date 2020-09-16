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
function checkRequired(inputArr){
    inputArr.forEach(function(input){
    if (input.value.trim() === ''){
        showError(input,`${getFeildName(input)} is required`);
    }else{
        showSuccess(input);
    }
})}
function getFeildName (input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function EmailValidation(input){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
});