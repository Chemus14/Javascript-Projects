'use strict';

// Use length Property Challenge
const text = 'Hi, i am your father';
const textLen = text.length;

document.getElementById('word').innerHTML = text;
document.getElementById('length').innerHTML = textLen;

// A “For Loop” is used to repeat a section of code a number of times.
// For Loops are used when the number of iterations are known.
// For example:
// for each student in the class (25), provide a grade.

const Instruments = ['Guiter', 'Flute', 'Piano', 'Violin'];
let content = '';

function for_Loop() {
  for (let Y = 0; Y < Instruments.length; Y++) {
    content += Instruments[Y] + '<br>';
  }
  document.getElementById('List_of_Instruments').innerHTML = content;
}

// Arrays and Objects

function cat_pics() {
  let Cat_Picture = [];
  Cat_Picture[0] = 'Sleeping';
  Cat_Picture[1] = 'Playing';
  Cat_Picture[2] = 'Eating';
  Cat_Picture[3] = 'Purring';

  document.getElementById('Cat').innerHTML =
    'In this picture, the cat is ' + Cat_Picture[2] + '.';
}

function fill_cat_array() {
  let Cat_Picture = [];
  Cat_Picture[0] = 'Sleeping';
  Cat_Picture[1] = 'Playing';
  Cat_Picture[2] = 'Eating';
  Cat_Picture[3] = 'Purring';

  return Cat_Picture;
}

function array_Function() {
  const arrPicCat = fill_cat_array();
  let content = '';
  for (let i = 0; i < arrPicCat.length; i++) {
    content += arrPicCat[i] + '<br>';
  }
  document.getElementById('Array').innerHTML = content;
}

// Objects created with const

const animal = {
  species: 'dog',
  breed: 'golden retriever',
  age: 5,
  sound: 'woof',
  likes: ['playing fetch', 'going for walks', 'belly rubs'],
};

const constant_Function = function () {
  document.getElementById('Constant').innerHTML =
    'My pet is ' +
    animal.species +
    ' ,its breed is ' +
    animal.breed +
    ', he is ' +
    animal.age +
    ' and he likes ' +
    animal.likes[1];
};

// Object with let

let building = {
  name: 'Empire State Building',
  height: 1454,
  city: 'New York',
  country: 'United States',
};

function let_Function() {
  let content =
    'the ' +
    building.name +
    ' has ' +
    building.height +
    'm, is located in ' +
    building.city +
    ',' +
    building.country;

  document.getElementById('Let').innerHTML = content;
}

const arrFruits = ['orange', 'banana', 'grape', 'apple', 'avocado'];
let displayFruits = [];
for (let i = 0; i < arrFruits.length; i++) {
  displayFruits += arrFruits[i];
}
document.getElementById('arrFruit').innerHTML = displayFruits;

let arrBreak = [];
// Break - if the element of the array is apple, the loop stop
for (let i = 0; i < arrFruits.length; i++) {
  if (arrFruits[i] === 'apple') break;
  arrBreak.push(arrFruits[i]);
}

document.getElementById('fruit').innerHTML = arrBreak.join(' ');

// Continue

const numbersModulus = [2, 4, 8, 12, 15, 22, 25];
let numbers = [];
for (let i = 0; i < numbersModulus.length; i++) {
  numbers.push(numbersModulus[i]);
}

document.getElementById('arrNumbers').innerHTML = numbers.join(' ');

let modulus = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) continue;
  modulus.push(numbers[i]);
}

document.getElementById('numbers').innerHTML = modulus.join(' ');

let cont = 0;
let result = [];
while (cont < numbers.length) {
  alert(numbers[cont]);
  if (numbers[cont] % 2 === 0) {
    cont++;
    continue;
  }
  result.push(numbers[cont]);
  cont++;
}

document.getElementById('numbers2').innerHTML = result.join(' ');
