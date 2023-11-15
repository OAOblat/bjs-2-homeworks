"use strict";

// Задача №1 Исследовать массив

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i]) < min) {
			min = arr[i];
		}
		if ((arr[i]) > max) {
			max = arr[i];
		}
		sum += arr[i];
		avg = Number((sum / arr.length).toFixed(2));
	}
	return {
		min: min,
		max: max,
		avg: avg
	};
}

// Задача №2 Насадки преобразователи
// Насадка суммирования элементов

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sumInitial = 0;
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, sumInitial);
  return sum;
};

// Насадка вычисления разницы максимального и минимального элементов

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}

// Насадка вычисления разницы сумм чётных и нечётных элементов

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

// Насадка вычисления среднего значения чётных элементов

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

// Задача №3 Агрегатор преобразователей

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}