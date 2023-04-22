'use strict';

let text1 = 'My name is ';
let text2 = 'Jose ';
let text3 = 'Jimenez';

// Concat Method
const text = text1.concat(text2, text3);

document.getElementById('concatText').innerHTML = text;

// Slice Method

function slice_Method() {
  const sliceText = text.slice(2, 7);
  document.getElementById('slice').innerHTML = sliceText;
}

// toTupperCase() Method

function uppercase_Method() {
  const upperCase = text.toUpperCase();
  document.getElementById('upper').innerHTML = upperCase;
}

// search() Method - the return can be the position if it find the search, and -1 if cannot find it

function search_Method() {
  const value = document.getElementById('value').value;
  const result =
    text.search(value) != -1
      ? 'Ey found it!! and this is the position in the string: ' +
        text.search(value)
      : 'Sorry is not in our DB!!';
  document.getElementById('result').innerHTML = result;
}

// variable.toString()

function number_to_String() {
  let X = 5;
  let Y = X.toString();
  document.getElementById('numberTo').innerHTML = typeof Y + ' ' + Y;
}

// toPrecision() Method

function precision_Method() {
  let X = 12342.41324124124;
  document.getElementById('precision').innerHTML =
    'Initial number: ' + X + ' and the formatted one ' + X.toPrecision(10);
}

// toFixed() Method

const number = 23.2324223;
const resultFixed = number.toFixed(2);
document.getElementById('toFixed').innerHTML =
  'Initial number was : ' + number + ' and the fixed number is ' + resultFixed;

// valueOf() Method
//method can be used to convert a string object into a string
//method returns the primitive value of a string.
let textV = 'hello';
document.getElementById('valueOf').innerHTML = textV.valueOf();
