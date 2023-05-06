'use strict';

let url = window.document.URL;
console.log(url);
document.querySelector('.first').innerHTML = url;

let body = window.document.body;
console.log(body);
document.querySelector('.second').innerHTML = body;

let statusW = window.document.readyState;
document.querySelector('.third').innerHTML = statusW;
