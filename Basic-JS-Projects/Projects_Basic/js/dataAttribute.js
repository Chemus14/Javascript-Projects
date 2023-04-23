'use strict';

function displayType(character) {
  console.log(character);
  const characterType = character.getAttribute('data-character-type');
  alert(characterType + ' is in the ' + character.innerHTML + ' universe!');
}
