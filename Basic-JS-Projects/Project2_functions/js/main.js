'use strict';
const button = document.querySelector('.change');
button.style.display = 'none';
// Function to add text to the element <p> and display new button to change the color
const addText = function () {
  let sentence = 'I am learning';
  //Concatening with the operator +=
  sentence += ' a lot from this book!';
  document.getElementById('text').innerHTML = sentence;
  button.style.display = 'block';
};

// Function to change the color of the element <p>
const changeColor = function () {
  document.getElementById('text').style.color = 'Green';
};

// Math Functions
// Addition

const addition = function () {
  const addition = 2 + 2;
  document.getElementById('math').innerHTML = '2 + 2 = ' + addition;
};
