'use strict';

let btnStart = document.getElementById('start'), // получаем кнопку "Начать расчет"
    resultBlock = document.querySelector('.result-table'), // получаем блок "result" из правой части
    resultValues = resultBlock.querySelectorAll('[class$="-value"]'), // из блока "result" получаем блоки, которые имеют класс название-value
    expItems = document.getElementsByClassName('expenses-item'), // получаем поля с обязательными расходами
    dataBtns = document.getElementsByTagName('button'), // получаем кнопки
    expBtn = dataBtns[0], // выделяем каждой кнопке свою пременную
    optExpBtn = dataBtns[1],
    countBtn = dataBtns[2],
    optExpItems = document.querySelectorAll('.optionalexpenses-item'), // получаем поля для необязательных расходов
    income = document.querySelector('.choose-income'), // статьи дохода
    checkbox = document.getElementById('savings'), // чекбокс
    sum = document.getElementById('sum'), // сумма
    percent = document.getElementById('percent'), // процент
    timeBlock = document.querySelector('.time-data'), // блок с датой
    timeValues = timeBlock.querySelectorAll('input[class$="-value"]'), // поля ввода даты
    year = timeValues[0], // переменная для каждого значения
    month = timeValues[1],
    day = timeValues[2];