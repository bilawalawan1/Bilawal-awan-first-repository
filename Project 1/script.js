//Retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username  = document.getElementById('username');
const email  = document.getElementById('email');
const passward  = document.getElementById('passward');
const passward2  = document.getElementById('passward2');

//Function to update class and message for errors
function showError(input,message) {
    //Get the parent element of the input field (.form-control)
    const formcontrol = input.parentElement;
    //Replace the class - add error
    formcontrol.className = 'form-control error'
    //Get the small element for the error message
    const small = formcontrol.querySelector('small');
    //Replace the text for small element using the input message
    small.innerText = message;
}   

//Function to update class for succes
function showSuccess(input) {
    //Get the parent element of the input field (.form-control)
    const formcontrol = input.parentElement;
    //Replace the class - add success
formcontrol.className = 'form-control success'
}

//Event Listeners
//Create event listener for submit button
form.addEventListener('submit',function(e) {
    //Stop page from reloading on submit
    e.preventDefault();
    //Check to see if field meet required field requirement
    //Check if username input is empty
    if(username.value === ''){
        showError(username,'Username is required');
    } else {
        showSuccess(username);
    }

    //Check if email input is empty
    if(email.value === ''){
        showError(email,'Email is required');
    } else {
        showSuccess(email);
    }

    //Check if passward input is empty
    if(passward.value === ''){
        showError(passward,'Passward is required');
    } else {
        showSuccess(passward);
    }
    
    //Check if passward input is empty
    if(passward2.value === ''){
        showError(passward2,'Conform Passward is required');
    } else {
        showSuccess(passward2);
    }
});