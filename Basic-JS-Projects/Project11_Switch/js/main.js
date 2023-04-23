'use strict';

function Color_Function() {
  let Color_Output;
  const Colors = document.getElementById('Color_Input').value;
  const Color_String = ' is a great color!';
  switch (Colors) {
    case 'Red':
      Color_Output = 'Red' + Color_String;
      break;
    case 'Yellow':
      Color_Output = 'Yellow' + Color_String;
      break;
    case 'Green':
      Color_Output = 'Green' + Color_String;
      break;
    case 'Blue':
      Color_Output = 'Blue' + Color_String;
      break;
    case 'Pink':
      Color_Output = 'Pink' + Color_String;
      break;
    case 'Purple':
      Color_Output = 'Purple' + Color_String;
      break;
    default:
      Color_Output =
        'Please enter a color exactly as written on the abocve list.';
  }
  document.getElementById('Output').innerHTML = Color_Output;
}
