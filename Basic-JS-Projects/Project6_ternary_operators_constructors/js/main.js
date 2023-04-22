'use strict';
function Ride_Function() {
  let Height, Can_ride;
  Height = document.getElementById('Height').value;
  Can_ride = Height < 52 ? 'You are too short ' : 'You are tall enough ';
  document.getElementById('Ride').innerHTML = Can_ride + 'to ride';
}

function Vote_Function() {
  let Vote, Can_vote;
  Vote = document.getElementById('Age').value;
  console.log(Vote);
  Can_vote = Vote < 18 ? 'You are too young ' : 'You are old enough ';
  document.getElementById('Vote').innerHTML = Can_vote + 'to vote';
}

// Constructor

function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

const Jack = new Vehicle('Dodge', 'Viper', 2020, 'Red');
const Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black');
const Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');

function myFunction() {
  document.getElementById('Keywords_and_Constructors').innerHTML =
    'Erik drives a ' +
    Erik.Vehicle_Color +
    '-colored ' +
    Erik.Vehicle_Model +
    ' manufactured in ' +
    Erik.Vehicle_Year;
}

// Challenge new constructor
function Person(first, last, age, height) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.height = height;
}

const Jose = new Person('Jose', 'Jimenez', 36, 1.87);

function myFunction2() {
  document.getElementById('New_and_This').innerHTML =
    Jose.firstName +
    ' ' +
    Jose.lastName +
    ' is ' +
    Jose.age +
    ' years-old and he is ' +
    Jose.height +
    'm';
}

// Nested functions
// Function nested, when the first function its calling to the second to change the color
const text = document.getElementById('Nested_Function');
function random_Color() {
  text.innerHTML = 'Click me again, i will change my color';
  getRandomColor();
  function getRandomColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    text.style.color = randomColor;
  }
}
