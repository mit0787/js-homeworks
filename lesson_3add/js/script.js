'use strict';

let str = "урок-3-был слишком легким",
    str2 = "";

str = str[0].toUpperCase() + str.slice(1); // делаем первую букву прописной

for (let i = 0; i < str.length; i++) { // заменяем дефисы на пробелы
  if (str.charAt(i) === "-") {
    str2 += " ";
  } else {
    str2 += str[i];
  }
}

str = str2;

console.log(str); 


let word = str.substring(str.indexOf("легким"), str.length - 2) + "оо"; // вырезаем слово легким и меняем 2 последние буквы

console.log(word);

let arr = [20, 33, 1, "Человек", 2, 3],
    sum = 0;

for (let i = 0; i < arr.length; i++) { 
  if (typeof(arr[i]) !== 'string') { // проверяем тип данных из массива
    sum += Math.pow(arr[i],3);  // высчитываем сумму кубов
  }
}

console.log(Math.sqrt(sum)); // выводим в консоль квадратный корень полученной суммы

function doSome(str) { 
  if (typeof(str) !== 'string') { // проверяем ни строку
    console.log("Это не строка");
  } else {
    while (str.charAt(0) === " ") { // удаляем пробелы в начале
      str = str.slice(1, str.length);
    }
    while (str.charAt(str.length - 1) === " ") { // удаляем пробелы в конце
      str = str.slice(0, str.length - 2);
    }
    if (str.length > 50) { // обрезаем до 50ти символов
      str = str.slice(0, 50) + "...";
    }
  }
  return str;
}

console.log(doSome("      nggkfgghjk nggkfgghjk nggkfgghjk nggkfgghjk nggkfgghjk                "));