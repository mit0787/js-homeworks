$(document).ready(function () {
  let showModal = () => {
    $('.overlay').fadeIn();
    $('.modal').slideDown();
  };

  $('a[href="#sheldure"]').click(function () {
    showModal();
  });

  $('a[href="#tour"]').click(function () {
    showModal();
  });

  $('.contact').click(function () {
    showModal();
  });

  $('.close').click(function () {
    $('.overlay').fadeOut();
    $('.modal').slideUp();
  });
});