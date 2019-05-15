$(document).ready(function () {
  $('a[href="#sheldure"]').click(function () {
    $('.overlay').fadeIn();
    $('.modal').slideDown();
  });

  $('a[href="#tour"]').click(function () {
    $('.overlay').fadeIn();
    $('.modal').slideDown();
  });

  $('.contact').click(function () {
    $('.overlay').fadeIn();
    $('.modal').slideDown();
  });

  $('.close').click(function () {
    $('.overlay').fadeOut();
    $('.modal').slideUp();
  });
});