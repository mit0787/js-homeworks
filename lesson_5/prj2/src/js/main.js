'use strict';

let btnStart = document.getElementById('start'), // получаем кнопку "Начать расчет"
    budget = document.getElementsByClassName('budget-value')[0], // из блока "result" получаем блоки, которые имеют класс название-value
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],
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
    year = document.getElementsByClassName('year-value')[0], // переменная для каждого значения даты
    month = document.getElementsByClassName('month-value')[0],
    day = document.getElementsByClassName('day-value')[0];