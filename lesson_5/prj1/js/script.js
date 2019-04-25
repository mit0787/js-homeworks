'use strict';

let menu = document.querySelector('.menu'), // получаем список
    menuItems = document.getElementsByClassName('menu-item'), // получаем элементы списка
    item5 = menuItems[3].cloneNode(), // клонируем элемент списка
    title = document.getElementById('title'), // получаем заголовок
    adv = document.querySelector('.adv'), // получаем блок с рекламой
    answerBox = document.getElementById('prompt'), // получаем блок для записи ответа
    answer = prompt("Ваше отношение к технике Apple?"); // задаем вопрос пользователю

menu.insertBefore(menuItems[2], menuItems[1]); // меняем местами элементы списка
item5.innerHTML = "Пятый пункт"; // добавляем текст в клонированный элемент
menu.appendChild(item5); // добавляем элемент в список

document.body.style.backgroundImage = ('url(./img/apple_true.jpg)'); // меняем бэкграунд

title.innerHTML = "Мы продаем только подлинную технику Apple"; // меняем заголовок

adv.remove(); // удаляем рекламу

while ((typeof answer) !== 'string' || answer === null || answer === '') { // задаем вопрос пользователю
  answer = prompt("Ваше отношение к технике Apple?");
}
answerBox.innerHTML = answer; // записываем ответ на странице