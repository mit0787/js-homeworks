'use strict';

let num = 33721,
    arr = String(num).split(""),
    total = 1;
for (let i = 0; i < arr.length; i++) {
  total *= arr[i];
}
console.log(total);
let exponent = total ** 3,
    number = String(exponent).split("");
number.length = 2;
alert(number);