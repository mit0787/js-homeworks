'use strict';

window.addEventListener('DOMContentLoaded', function () {

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  let hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  let showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // timer

  let deadLine = '2019-05-29';

  let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  let setClock = (id, endtime) => {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      updateClock = () => {
        let t = getTimeRemaining(endtime);
        if (t.hours < 10) {
          hours.textContent = "0" + t.hours;
        } else {
          hours.textContent = t.hours;
        }
        if (t.minutes < 10) {
          minutes.textContent = "0" + t.minutes;
        } else {
          minutes.textContent = t.minutes;
        }
        if (t.seconds < 10) {
          seconds.textContent = "0" + t.seconds;
        } else {
          seconds.textContent = t.seconds;
        }
        if (t.total <= 0) {
          clearInterval(timeInterval);
          hours.textContent = "00";
          minutes.textContent = "00";
          seconds.textContent = "00";
        }
      },
      timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', deadLine);

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

  let reg = /^\+[\d]{1}\([\d]{3}\)[\d]{3}-[\d]{2}-[\d]{2}$/; // регулярное выражение для проверки телефона
  let phone = document.querySelectorAll('input[name="phone"]'); // получаем поля с телефонами

  // формы
  let message = { // объект с выводими сообщениями
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    error: 'Введите номер в формате +7(999)999-99-99'
  };

  // в модальном окне
  let form = document.querySelector('.main-form'), // получаем форму в модальном окне
    secondForm = document.getElementById('form'),
    input = form.getElementsByTagName('input'), // инпуты
    statusMassege = document.createElement('div'); // создаем див для сообщения

  statusMassege.classList.add('status'); // присваиваем класс

  function postData(data) { // создаем функцию отправки данных
    let formData = new FormData(data);
    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);

    return new Promise(function (resolve, reject) { // создаем промис
      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/json; charset = utf-8');
      request.onreadystatechange = function () {
        if (request.readyState < 4) { // при задержке ответа
          statusMassege.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) { // при успешной передаче
          resolve();
        } else { // при ошибке
          reject();
        }
      };
      request.send(json);
    });
  }

  form.addEventListener('submit', function (event) { // действия при отправке данных
    event.preventDefault(); // убираем дефолтное действие
    form.appendChild(statusMassege);

    if (!reg.test(phone[1].value)) {
      statusMassege.innerHTML = message.error;
    } else {
      postData(form) // запускаем функцию отправки данных и выполняем промисы
        .then(() => statusMassege.innerHTML = message.success) // при удачной отправке
        .catch(() => statusMassege.innerHTML = message.failure); // при ошибке

      for (let i = 0; i < input.length; i++) { // очистка полей формы
        input[i].value = '';
      }
    }
  });

  // внизу страницы
  secondForm.addEventListener('submit', function (event) { // действия при отправке данных
    event.preventDefault(); // убираем дефолтное действие
    secondForm.appendChild(statusMassege); // добавляем див с сообщением

    if (!reg.test(phone[0].value)) {
      statusMassege.innerHTML = message.error;
    } else {
      postData(secondForm)
        .then(() => statusMassege.innerHTML = message.success)
        .catch(() => statusMassege.innerHTML = message.failure);

      for (let i = 0; i < input.length; i++) { // очистка полей формы
        input[i].value = '';
      }
    }
  });

  // слайдер

  let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });

  // калькулятор
  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daySum = 0,
    total = 0;

  totalValue.textContent = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daySum + personsSum) * 4000;
    totalValue.textContent = total;
    if (restDays.value == '' || restDays.value == '0') {
      totalValue.textContent = 0;
    }
    if (persons.value == '' || persons.value == '0') {
      totalValue.textContent = 0;
    }
  });

  persons.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d]/g, '');
  });

  restDays.addEventListener('change', function () {
    daySum = +this.value;
    total = (daySum + personsSum) * 4000;
    totalValue.textContent = total;
    if (persons.value == '' || persons.value == '0') {
      totalValue.textContent = 0;
    }
    if (restDays.value == '' || restDays.value == '0') {
      totalValue.textContent = 0;
    }
  });

  restDays.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d]/g, '');
  });

  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.textContent = 0;
    } else {
      let a = total;
      totalValue.textContent = a * this.options[this.selectedIndex].value;
    }
  });

});