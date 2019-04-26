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

let money, time;

btnStart.addEventListener('click', function () { // кнопка "Начять расчет"
    time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10)); // получаем от пользователя дату
    money = +prompt("Ваш бюджет на месяц?", "");    // бюджет

    while (isNaN(money) || money == "" || money == null) { // проверка поля бюджет
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.budget = money; // записываем бюджет в appData
    appData.timeData = time; // записываем время
    budget.textContent = money.toFixed(); // выводим бюджет на странице
    year.value = new Date(Date.parse(time)).getFullYear(); // выводим дату на странице
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
    btnActivate();
});

expBtn.addEventListener('click', function () { // кнопка для обязательной статьи расходов
        let sum = 0;
        for (let i = 0; i < expItems.length; i++) {
            let expense = expItems[i].value,
                cost = expItems[++i].value;
    
            if ((typeof (expense)) === 'string' && expense != null && cost != null &&
                expense != '' && cost != '' && expense.length < 50) {
                appData.expenses[expense] = cost;
                sum += +cost;
            } else {
                i--;
            }
        }
        expenses.textContent = sum;
        countBtn.removeAttribute("disabled");
});

optExpBtn.addEventListener('click', function () {
    for (let i = 0; i < optExpItems.length; i++) {
        let optExpense = optExpItems[i].value;

        if ((typeof (optExpense)) === 'string' && optExpense != null && optExpense != '' && optExpense.length < 50) {
            appData.optionalExpenses[i] = optExpense;
            optExpenses.textContent += appData.optionalExpenses[i] + ' ';
        } else {
            i--;
        }
    }
});

countBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.budgetPerDay = ((appData.budget - +expenses.textContent) / 30).toFixed();
        dayBudget.textContent = appData.budgetPerDay;

        if (appData.budgetPerDay < 100) {
            level.textContent = "Минимальный уровень достатка";
        } else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
            level.textContent = "Средний уровень достатка";
        } else if (appData.budgetPerDay > 2000) {
            level.textContent = "Высокий уровень достатка";
        } else {
            level.textContent = "Произошла ошибка";
        }
    } else {
        dayBudget.textContent = "Произошла ошибка";
    }
});

incomeAdd.addEventListener('input', function () {
    let items = incomeAdd.value;
    appData.income = items.split(", ");
    income.textContent = appData.income.join(", ");
});

checkbox.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener('input', function () {
    if (appData.savings == true) {
        let a = +sum.value,
            b = +percent.value;

        appData.monthIncome = a / 100 / 12 * b;
        appData.yearIncome = a / 100 / 12;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function () {
    if (appData.savings == true) {
        let a = +sum.value,
            b = +percent.value;

        appData.monthIncome = a / 100 / 12 * b;
        appData.yearIncome = a / 100 * b;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


document.addEventListener('DOMContentLoaded', function () {     // при загрузке страницы
    if (appData.budget == undefined) {                          // проверяем значение бюджета
        for (let i = 0; i < dataBtns.length - 1; i++) {
            dataBtns[i].setAttribute("disabled", "disabled");   // деактивируем кнопки, если значения нет
        }
    }
});

function btnActivate() {
    if (appData.budget != undefined && expItems[0].value != '' && expItems[1].value != '' && expItems[2].value != '') {
        expBtn.removeAttribute("disabled");
    }
    if (appData.budget != undefined && optExpItems[0].value != '' && optExpItems[1].value != '') {
        optExpBtn.removeAttribute("disabled");
    }
}

expItems[3].addEventListener('input', function () {
    btnActivate();
});


optExpItems[2].addEventListener('input', function () {
    btnActivate();
});

