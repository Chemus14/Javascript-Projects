'use strict';
function Hello_World_Function() {
  const A = document.getElementsByClassName('click');
  A[0].innerHTML = 'The text has changed';
}

var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

var grd = ctx.createLinearGradient(150, 50, 200, 20);
grd.addColorStop(0, 'yellow');
grd.addColorStop(1, 'white');

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 300);

ctx.beginPath();
ctx.arc(250, 130, 100, 0, 2 * Math.PI);
ctx.stroke();
