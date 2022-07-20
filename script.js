
'use strict';


var slideElements = ['.back__slide', '.card__slide', '.content__slide'];
var inProgress = false;

var goToSlide = function goToSlide(slideElements, index) {
  if (!inProgress) {
    inProgress = true;

    $('.active').addClass('exit');
    $('.active').removeClass('active');
    slideElements.forEach(function (elem) {
      $(elem + ':nth-child(' + index + ')').addClass('active');
    });

    var evenSlide = index % 2 === 0;
    if (evenSlide) $('.content__ping').addClass('content__ping--right');else $('.content__ping').removeClass('content__ping--right');
    $('.content__ping--noanimation').removeClass('content__ping--noanimation');

    setTimeout(function () {
      return $('.exit').removeClass('exit');
    }, 1000);
    setTimeout(function () {
      return inProgress = false;
    }, 2000);
  }
};

$('.content__slide:nth-child(1) .button').on('click', function () {
  return goToSlide(slideElements, 2);
});
$('.content__slide:nth-child(2) .button').on('click', function () {
  return goToSlide(slideElements, 1);
});

setTimeout(function () {
  return goToSlide(slideElements, 2);
}, 2000);
setTimeout(function () {
  return goToSlide(slideElements, 1);
}, 6000);
