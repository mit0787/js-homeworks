function forms() {
  // регулярка для телефона
  let phone = document.querySelectorAll('input[name="phone"]'); // получаем поля с телефонами

  phone.forEach(function (item) {
    item.addEventListener('input', function () { // разрешаем ввод только цифр и +
      this.value = this.value.replace(/[^\+\d]/g, '');
    });
  });

  // формы
  let message = { // объект с выводими сообщениями
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
  };

  // в модальном окне
  let form = document.querySelector('.main-form'), // получаем форму в модальном окне
    secondForm = document.getElementById('form'),
    input = form.getElementsByTagName('input'), // инпуты
    secondInput = secondForm.getElementsByTagName('input'),
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

    postData(form) // запускаем функцию отправки данных и выполняем промисы
      .then(() => statusMassege.innerHTML = message.success) // при удачной отправке
      .catch(() => statusMassege.innerHTML = message.failure); // при ошибке

    for (let i = 0; i < input.length; i++) { // очистка полей формы
      input[i].value = '';
    }
  });

  // внизу страницы
  secondForm.addEventListener('submit', function (event) { // действия при отправке данных
    event.preventDefault(); // убираем дефолтное действие
    secondForm.appendChild(statusMassege); // добавляем див с сообщением
    statusMassege.style.color = '#ffffff';

    postData(secondForm)
      .then(() => statusMassege.innerHTML = message.success)
      .catch(() => statusMassege.innerHTML = message.failure);

    for (let i = 0; i < secondInput.length; i++) { // очистка полей формы
      secondInput[i].value = '';
    }
  });
}

module.exports = forms;