'use strict';

// Countdown

function countdown() {
  console.log('hola');
  let seconds = document.getElementById('seconds').value;
  console.log(seconds);

  function tick() {
    const timer = document.getElementById('timer');
    seconds = seconds - 1;
    if (seconds != -1) timer.innerHTML = seconds;
    const time = setTimeout(tick, 1000);
    if (seconds == -1) {
      alert('Times up');
      clearTimeout(time);
      timer.innerHtml = '';
    }
  }
  tick();
}

// Slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  console.log(n);
  console.log(slides.length);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
