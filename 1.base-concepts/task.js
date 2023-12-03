"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d;
  let e;
  let equation1;
  let equation2;
  d = b**2-4*a*c;
  
  // Если дискриминант равен нулю, то корень один.
  if (d === 0) {
    e = -b/(2*a);
    arr.push(e);
  // Если дискриминант больше нуля, то существует два решения уравнения;
  } else if (d > 0) {
    equation1 = (-b + Math.sqrt(d))/(2*a);
    equation2 = (-b - Math.sqrt(d))/(2*a);
    arr.push(equation1);
    arr.push(equation2);
  // Если дискриминант меньше нуля, то корней нет (пустой массив).
  } else if (d < 0) {
    arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent * 10**-2;
  let kredit = amount - contribution;
  let P = percent / 12;
  // Вычисляем плату за месяц.
  let mounthPayments = kredit * (P + (P / (((1 + P)**countMonths) - 1)));
  // Общая сумма
  let totalAmount = countMonths * mounthPayments;
  totalAmount = parseFloat(totalAmount);
  // Убираем до 2 знаков после запятой и приводим к числу.
  totalAmount = Number.parseFloat(totalAmount.toFixed(2));
  
  return totalAmount;
}