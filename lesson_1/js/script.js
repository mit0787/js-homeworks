'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses: '',
      income: [],
      savings: false
    },
    expenseOne = prompt("Введите обязательную статью расходов в этом месяце", ""),
    costOne = +prompt("Во сколько обойдется?", ""),
    expenseTwo = prompt("Введите обязательную статью расходов в этом месяце", ""),
    costTwo = +prompt("Во сколько обойдется?", ""),
    expenseSum = 0;
appData.expenses[expenseOne] = costOne;
appData.expenses[expenseTwo] = costTwo;
let budgetPerDay = Math.floor(appData.budget / 30);
alert("Ваш бюджет в день составляет " + budgetPerDay);
