'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
      cost = +prompt("Во сколько обойдется?", "");
  
    if ((typeof (expense)) === 'string' && (typeof (expense)) != null && (typeof (cost)) != null &&
      expense != '' && cost != '' && expense.length < 50) {
      appData.expenses[expense] = cost;
    } else {
      i--;
    }
  }  
}

chooseExpenses();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let optExpense = prompt("Статья необязательных расходов?", "");
  
    if ((typeof (optExpense)) === 'string' && (typeof (optExpense)) != null && optExpense != '' && optExpense.length < 50) {
      appData.optionalExpenses[i+1] = optExpense;
    } else {
      i--;
    }
  }  
}

chooseOptExpenses();

function detectDayBudget() {
  appData.budgetPerDay = +(appData.budget / 30).toFixed();
  alert("Ваш бюджет в день составляет: " + appData.budgetPerDay + "руб");
}

detectDayBudget();

function detectLevel() {
  if (appData.budgetPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.budgetPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
    percent = +prompt("Под какой процент?");

    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
  }
}

checkSavings();