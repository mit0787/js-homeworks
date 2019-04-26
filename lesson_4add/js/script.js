'use strict';

function sumDeviders(a) {
  let sum = 0;
  for (let i = 0; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }
  return sum;
}

function getFriendlyNumbers(a1, a2) {
  let arr = [];
  if (typeof a1 === 'number' && typeof a2 === 'number' && a1 < a2 && a1 >= 0 && a2 > 0 && (a1 ^ 0) === a1 && (a2 ^ 0) === a2) {
    for (let i = a1; i < a2; i++) {
      let num2 = sumDeviders(i);
      if (sumDeviders(num2) === i && i < num2) {
        let arr2 = [i, num2];
        arr.push(arr2);
      }
    }
    return arr;
  } else {
    console.log("Ошибка");
  }
}

console.log(getFriendlyNumbers(1, 1500));
