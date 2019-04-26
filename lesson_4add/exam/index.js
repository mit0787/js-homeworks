function sumDeviders(a) { // функция подсчета суммы делителей
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
    while (typeof a1 !== 'number' || typeof a2 !== 'number' || a2 < a1 || a1 < 0 || a2 < 0 || (a1 ^ 0) !== a1 || (a2 ^ 0) !== a2) {
        return false;
    } // проверка на неправильный тип данных (только числа!), start > end, отрицательный диапазон, дробные числа
    for (let i = a1; i < a2; i++) { // перебираем числа из заданного диапазона
        let num2 = sumDeviders(i); // получаем сумму делителей
        if (sumDeviders(num2) === i && i < num2) { // сравниваем сумму делителей с числом
            let arr2 = [i, num2];
            arr.push(arr2); // записываем пары в массив
        }
    }

    return arr; // возвращаем массив
}

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}