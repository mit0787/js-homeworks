function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daySum = 0,
    placeValue = place.options[place.selectedIndex].value, // получаем значение у опции места
    total = 0;

  totalValue.textContent = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daySum + personsSum) * 4000;
    totalValue.textContent = total * placeValue; // выводим значение с учетом места
    if (persons.value == '' || persons.value == '0' || restDays.value == '' || restDays.value == '0') {
      totalValue.textContent = 0;
    }
  });

  persons.addEventListener('input', function () { // разрешаем ввод только цифр
    this.value = this.value.replace(/[^\d]/g, '');
  });

  restDays.addEventListener('change', function () {
    daySum = +this.value;
    total = (daySum + personsSum) * 4000;
    totalValue.textContent = total * placeValue;
    if (persons.value == '' || persons.value == '0' || restDays.value == '' || restDays.value == '0') {
      totalValue.textContent = 0;
    }
  });

  restDays.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d]/g, '');
  });

  place.addEventListener('change', function () {
    placeValue = this.options[this.selectedIndex].value; // получаем значение при каждом выборе
    totalValue.textContent = total * placeValue;
    if (persons.value == '' || persons.value == '0' || restDays.value == '' || restDays.value == '0') {
      totalValue.textContent = 0;
    }
  });
}

module.exports = calc;