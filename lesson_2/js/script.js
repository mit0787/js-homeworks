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
    };

for (let i = 0; i < 2; i++) {
  let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
      cost = +prompt("Во сколько обойдется?", "");
  
  if ((typeof(expense)) === 'string' && (typeof(expense)) != null && (typeof(cost)) != null
      && expense != '' && cost != '' && expense.length < 50) {
      appData.expenses[expense] = cost;
      } else {
        i--;
      }
}

// let i = 0;
// while (i < 2) {
//   i++;
//   let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       cost = +prompt("Во сколько обойдется?", "");
  
//   if ((typeof(expense)) === 'string' && (typeof(expense)) != null && (typeof(cost)) != null
//       && expense != '' && cost != '' && expense.length < 50) {
//       appData.expenses[expense] = cost;
//       } else {
//         i--;
//       }
// }

// let i = 0;
// do {
//   i++;
//   let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       cost = +prompt("Во сколько обойдется?", "");
  
//   if ((typeof(expense)) === 'string' && (typeof(expense)) != null && (typeof(cost)) != null
//       && expense != '' && cost != '' && expense.length < 50) {
//       appData.expenses[expense] = cost;
//       } else {
//         i--;
//       }
// }
// while (i < 2);

appData.budgetPerDay = appData.budget / 30;
alert("Ваш бюджет в день составляет: " + appData.budgetPerDay + "руб");

if (appData.budgetPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.budgetPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}