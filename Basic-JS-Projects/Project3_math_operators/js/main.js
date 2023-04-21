'use strict';
// Math Functions
// Addition

const addition = function () {
  const addition = 2 + 2;
  document.getElementById('addition').innerHTML = '2 + 2 = ' + addition;
};

// Subtraction

const subtraction = function () {
  const subtraction = 5 - 2;
  document.getElementById('subtraction').innerHTML = '5 - 2 = ' + subtraction;
};

// Multiplication

const multiplication = function () {
  const multiplication = 6 * 8;
  document.getElementById('multiplication').innerHTML =
    '6 * 8 = ' + multiplication;
};

// Division

const division = function () {
  const division = 48 / 6;
  document.getElementById('division').innerHTML = '48 / 6 = ' + division;
};

// Multiple Operations

const multiOperations = function () {
  const simple_Math = ((1 + 2) * 10) / 2 - 5;
  document.getElementById('multi').innerHTML =
    ' 1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals ' +
    simple_Math;
};

// Modulus Operator

const modulusOperator = function () {
  const modulusOp = 25 % 6;
  document.getElementById('modulus').innerHTML =
    'When you divide 25 by 6 you have a reaminder of: ' + modulusOp;
};

// Binary Operator

const negationOperator = function () {
  const x = 10;
  document.getElementById('binary').innerHTML = -x;
};

// Increment operator

const incrementOp = function () {
  let x = 5;
  x++;
  document.getElementById('inc').innerHTML = x;
};

// Decrement operator

const decrementOp = function () {
  let x = 5;
  x--;
  document.getElementById('dec').innerHTML = x;
};

// Random
//To return a random number between 0 and 1, you would write the following JavaScript code:

document.write(
  'To return a random number between 0 and 1 ' + Math.random() + '<br>'
);

//If you would like to have a random number displayed between ___ and ___ (such as between 0 and 100), you would write the following code:

document.write(
  'To return a random number between 0 and 100 ' + Math.random() * 100
);

// Math function

document.write('<br> Number PI :' + Math.PI);
