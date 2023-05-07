'use strict';

document.body.classList.add('fade-out');

setTimeout(() => {
  document.body.classList.remove('fade-out');
}, 1000); // 5000 milliseconds = 5 seconds

const phoneSubmit = document.querySelector('#submit');
const phoneInput = document.querySelector('#phone');
const message = document.querySelector('.message');

phoneSubmit.addEventListener('click', function (event) {
  if (phoneInput.value.trim() === '') {
    // Phone number input is empty
    event.preventDefault();
    message.innerHTML = 'Please enter a phone number.';
  }
});

function openForm() {
  document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}
