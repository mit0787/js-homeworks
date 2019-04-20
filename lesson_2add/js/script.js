'use strict';

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    currentDay = "Суббота";
for (let i = 0; i < week.length; i++) {
  if (week[i] === currentDay && i >=5) {
    console.log("%c%s", "font: bold italic 12px Arial", week[i]);
  } else if (week[i] === currentDay) {
    console.log("%c%s", "font: italic 12px Arial", week[i]);
  } else if (i >= 5) {
    console.log("%c%s", "font: bold 12px Arial", week[i]);
  } else {
    console.log(week[i]);
  }
}

let arr = ["4564", "79875", "37341", "638734", "365851", "94315", "452343"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "3" || arr[i][0] === "7") {
    console.log(arr[i]);
  }
}