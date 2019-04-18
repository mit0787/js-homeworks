'use strict';

let num = 33721,
    str = String(num),
    total = 1;
for (let i = 0; i < str.length; i++) {
  total *= str[i];
}
console.log(total);
let exponent = total ** 3,
    number = String(exponent);
alert(number[0] + "," + number[1]);