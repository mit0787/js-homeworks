function modals() {
  let descBtn = document.querySelectorAll('.description-btn'),
    more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    popupClose = document.querySelector('.popup-close');

  descBtn.forEach(element => {
    element.addEventListener('click', function () {
      overlay.style.display = "block";
    });
  });

  popupClose.addEventListener('click', function () {
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  more.addEventListener('click', function () {
    overlay.style.display = "block";
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });
}

module.exports = modals;