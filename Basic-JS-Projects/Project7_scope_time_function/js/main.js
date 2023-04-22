'use strict';
// Global Variable
const X = 5;

function localVar() {
  //local variable
  let Y = 8;
  return Z;
}
// Displaying error, because the var Z is not defined
// console.log(localVar());

// If statements

if (1 < 2) {
  document.write(
    '<br>The left number is smaller than the number on the right. <br>'
  );
}

// Function getting date
function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById('Greeting').innerHTML = 'How are you today?';
  }
}

// Function get current date

function get_Today() {
  if (new Date()) {
    document.getElementById('today').innerHTML = new Date();
  }
}
// My own statement comparing numbers and displaying a message if it is true
if (10 > 6) {
  document.write('<br>Ey!! Its a good day!!');
}

// function with if else statement

function check_Age() {
  const age = document.getElementById('age').value;

  if (age >= 18) {
    document.getElementById('message').innerHTML =
      'Ey You can get your driver license!!';
  } else {
    document.getElementById('message').innerHTML =
      'Ey Still too young to get you driver license!!';
  }
}

// Get the time - else if

function Time_function() {
  const Time = new Date().getHours();
  let Reply;

  if (Time < 12 == Time < 18) {
    Reply = 'It is morning time!';
  } else if (Time >= 12 == Time < 18) {
    Reply = 'It is afternoon.';
  } else {
    Reply = 'It is evening time.';
  }

  document.getElementById('Time_of_day').innerHTML = Reply;
}
