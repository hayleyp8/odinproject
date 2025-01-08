
// creating variables that will link to the html
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password'); 

const form = document.querySelector('#signup');

// this method prevents the user from submitting the form
form.addEventListener('submit', function (e) {
    e.preventDefault(); // using this method
});