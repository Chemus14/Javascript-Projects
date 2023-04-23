'use strict';

function validateForm(e) {
  e.preventDefault();
  let name = document.forms['myForm']['fname'].value;
  let last = document.forms['myForm']['lname'].value;
  let country = document.forms['myForm']['country'].value;

  if (name == '') {
    document.querySelector('.message').innerHTML = 'You should enter a Name';
    return false;
  } else if (last == '') {
    document.querySelector('.message').innerHTML =
      'You should enter a Last Name';
    return false;
  } else if (country == '') {
    document.querySelector('.message').innerHTML = 'You should enter a Country';
    return false;
  } else {
    document.querySelector('.message').innerHTML =
      'Your info has been submitted';
    return true;
  }
}
