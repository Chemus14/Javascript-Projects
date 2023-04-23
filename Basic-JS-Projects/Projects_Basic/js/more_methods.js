'use strict';

const ages = [2, 10, 18, 10, 13, 15, 30];

// Using arrow function to pass in a parameter of age
const checkAge = (age) => age >= 18;
/*method tests whether at least one element in the array passes the test implemented 
by the provided function. It returns true if, in the array, it finds an element 
for which the provided function returns true; 
otherwise it returns false. It doesn't modify the array.
*/

const some_Function = function () {
  //Use the .some() to iterate through the array of ages and siplay the results
  document.getElementById('displayAge').innerHTML = ages.some(checkAge);
};
