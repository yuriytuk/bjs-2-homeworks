"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let diskriminant = b**2-4*a*c;
  
  // Если дискриминант равен нулю, то корень один.
  if (diskriminant === 0) {
    arr.push(-b/(2*a));
  // Если дискриминант больше нуля, то существует два решения уравнения;
  } else if (diskriminant > 0) {
    let equation1 = (-b + Math.sqrt(diskriminant))/(2*a);
    let equation2 = (-b - Math.sqrt(diskriminant))/(2*a);
    arr.push(equation1);
    arr.push(equation2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let PercentShare100 = percent * 10**-2;
  let kredit = amount - contribution;
  let InterestRateMonths = PercentShare100 / 12;
  // Вычисляем плату за месяц.
  let MounthPayments = kredit * (InterestRateMonths + (InterestRateMonths / (((1 + InterestRateMonths)**countMonths) - 1)));
  // Вычисляем общую сумму и убираем до 2 знаков после запятой и приводим к числу. Возвращаем результат.
  return Number.parseFloat((countMonths * MounthPayments).toFixed(2));
}