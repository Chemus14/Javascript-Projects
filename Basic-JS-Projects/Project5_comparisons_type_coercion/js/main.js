'use strict';

const R = 10;
const Q = '10';
const X = 'Hi';
const Y = 5;
const Z = true;

// Type of

document.write(X + ' is a type : ' + typeof X + '<br>');
document.write(Y + ' is a type : ' + typeof Y + '<br>');
document.write(Z + ' is a type : ' + typeof Z + '<br>');

// Type coercion

document.write(Y + Q);

// NaN and isNaN

document.write('It NaN,because you cannot divide 0 / 0: ' + 0 / 0 + '<br>');
document.write(Y + ' is not a number so its displaying ' + isNaN(Y) + '<br>');
document.write(X + ' is a number so its displaying ' + isNaN(X) + '<br>');

// infinite and -infinite

document.write(2e324 + '<br>');
document.write(-2e324 + '<br>');

// Boolean

document.write(Y > R);
document.write(Y < R);

// Console.log

console.log(Y + R);
console.log(Y > R);
document.write(Y == R);
// Comparing data and type ===
document.write(Y === R);
console.log('hi' === 'hi');
console.log('hi' === 3);
console.log('5' === 5);
console.log(5 === 3);

// && comparing two comparisions, both must be true
document.write(5 > 3 && 10 < 15);
console.log(3 > 1 && 10 > 20);
// || comparing two comparisions, but it will return when one of the comparisions is true
document.write(5 < 7 || 10 > 3);
// NOT Operator
document.write(!(5 > 2));
