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

  let deadLine = '2019-05-09';

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

  form.addEventListener('submit', function (event) { // действия при отправке данных
    event.preventDefault(); // убираем дефолтное действие
    form.appendChild(statusMassege); // добавляем див с сообщением

    if (!reg.exec(phone[1].value)) {
      statusMassege.innerHTML = message.error;
    } else {

    let request = new XMLHttpRequest(); // начинаем обмен данными с сервером

    request.open('POST', 'server.php'); // открываем запрос
    // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); - обычный заголовок запроса
    request.setRequestHeader('Content-Type', 'application/json; charset = utf-8'); // создаем заголовок запроса json
    
    let formData = new FormData(form); // преобразуем данные формы в json формат
    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);
    request.send(json); // отправляем данные

    request.addEventListener('readystatechange', function () { // выводим сообщение пользователю
      if (request.readyState < 4) { // при задержке ответа
        statusMassege.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) { // при успешной передаче
        statusMassege.innerHTML = message.success;
      } else {
        statusMassege.innerHTML = message.failure;  // при ошибке
      }
    });

    for (let i = 0; i < input.length; i++) { // очистка полей формы
      input[i].value = '';
    }
  }
  });

  // внизу страницы
  secondForm.addEventListener('submit', function (event) { // действия при отправке данных
    event.preventDefault(); // убираем дефолтное действие
    secondForm.appendChild(statusMassege); // добавляем див с сообщением
    
    if (!reg.exec(phone[0].value)) {
      statusMassege.innerHTML = message.error;
    } else {

    let request = new XMLHttpRequest(); // начинаем обмен данными с сервером

    request.open('POST', 'server.php'); // открываем запрос
    request.setRequestHeader('Content-Type', 'application/json; charset = utf-8'); // создаем заголовок запроса json
    
    let formData = new FormData(secondForm); // преобразуем данные формы в json формат
    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);
    request.send(json); // отправляем данные

    request.addEventListener('readystatechange', function () { // выводим сообщение пользователю
      if (request.readyState < 4) { // при задержке ответа
        statusMassege.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) { // при успешной передаче
        statusMassege.innerHTML = message.success;
      } else {
        statusMassege.innerHTML = message.failure;  // при ошибке
      }
    });

    for (let i = 0; i < input.length; i++) { // очистка полей формы
      input[i].value = '';
    }
  }
  });

});