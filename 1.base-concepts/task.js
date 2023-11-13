// Задача 1. Программа для решения квадратных уравнений (ax² + bx + c = 0)

"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b/(2*a));
    return arr;
  } else {
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonthly = (percent / 100) / 12;
  let principleAmount = amount - contribution;
  let paymentMonthly = principleAmount * (percentMonthly+ (percentMonthly / (((1 + percentMonthly)**countMonths) - 1)));
  let totalAmount = parseFloat((paymentMonthly * countMonths).toFixed(2));
  return totalAmount;
}

