'use strict';

let btnStart = document.getElementById('start'), // получаем кнопку "Начать расчет"
    budget = document.getElementsByClassName('budget-value'), // из блока "result" получаем блоки, которые имеют класс название-value
    dayBudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optExpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthSavings = document.getElementsByClassName('monthsavings-value'),
    yearSavings = document.getElementsByClassName('yearsavings-value'),
    expItems = document.getElementsByClassName('expenses-item'), // получаем поля с обязательными расходами
    dataBtns = document.getElementsByTagName('button'), // получаем кнопки
    expBtn = dataBtns[0], // выделяем каждой кнопке свою пременную
    optExpBtn = dataBtns[1],
    countBtn = dataBtns[2],
    optExpItems = document.querySelectorAll('.optionalexpenses-item'), // получаем поля для необязательных расходов
    incomeAdd = document.querySelector('.choose-income'), // статьи дохода
    checkbox = document.getElementById('savings'), // чекбокс
    sum = document.getElementById('sum'), // сумма
    percent = document.getElementById('percent'), // процент
    timeBlock = document.querySelector('.time-data'), // блок с датой
    year = document.getElementsByClassName('year-value'), // переменная для каждого значения даты
    month = document.getElementsByClassName('month-value'),
    day = document.getElementsByClassName('day-value');