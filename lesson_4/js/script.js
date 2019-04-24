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
  income: ["аренда", "чаевые", "подработка"],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
        cost = +prompt("Во сколько обойдется?", "");
    
      if ((typeof (expense)) === 'string' && expense != null && cost != null &&
        expense != '' && cost != '' && expense.length < 50) {
        appData.expenses[expense] = cost;
      } else {
        i--;
      }
    }
  },
  chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let optExpense = prompt("Статья необязательных расходов?", "");
    
      if ((typeof (optExpense)) === 'string' && optExpense != null && optExpense != '' && optExpense.length < 50) {
        appData.optionalExpenses[i+1] = optExpense;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function() {
    appData.budgetPerDay = +(appData.budget / 30).toFixed();
    alert("Ваш бюджет в день составляет: " + appData.budgetPerDay + "руб");
  },
  detectLevel: function() {
    if (appData.budgetPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.budgetPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?");
  
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
    }
  },
  chooseIncome: function() {
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)");
    while ((typeof(items)) !== 'string' || items == null || items == '') {
      items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)");
    }
    appData.income = items.split(", ");
  }
};

function lookProperties() {
  let str = "";
  for (let key in appData) {
    str = str + key + " : " + appData[key] + ", ";
  }
  str = "Наша программа включает в себя данные: " +str;
  return str;
}

console.log(lookProperties());

function lookIncome() {
  let str = "";
  appData.income.forEach(function (item, i) {
    str = str + ((i + 1) + ": " + item + ", ");
  });
  str = "Способы доп. заработка: " + str;
  return str;
}

console.log(lookIncome());