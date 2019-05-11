'use strict';

let age = document.getElementById('age');

function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser = showUser.bind(age); // привязываем значение инпута к функции, контекстом вызова this станет age

age.addEventListener('change', function () { // выводим сообщение при изменении значения
  showUser('Гайдук', 'Дмитрий');
});