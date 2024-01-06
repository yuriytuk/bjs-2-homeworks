// Задание 1
function getArrayParams(...arr) {

  // Максимальное значение
  let max = Math.max(...arr);
  // Минимальное значение
  let min = Math.min(...arr);
  // Среднее значение
  bufferVariable = arr.reduce((acc, item) => acc + item);
  avg = Number.parseFloat((bufferVariable / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Сумма элементов - Задание 2.2
function summElementsWorker(...arr) {
  let summElements = 0;
  if (arr.length == 0) {
    return summElements;
  }
  summElements = arr.reduce((acc, item) => acc + item);
  return summElements; 
}

// Разница между максимальным и минимальным значениями - задание 2.2
function differenceMaxMinWorker(...arr) {
  let max = 0;
  let min = 0;
  if (arr.length > 0) {
    max = Math.max(...arr);
    min = Math.min(...arr);
  }   
  return max - min;
}

// Разница между суммами чётных и нечётных чисел - задание 2.3
function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0; 
  // Проверка не пуст ли массив
  if (arr.length == 0) {
    return 0;
  }
  // Переборка элементов массива
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  } 
  return sumEvenElement - sumOddElement;
}

// Задание 2.4
function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  // Проверка не пуст ли массив
  if (arr.length == 0) {
    return 0;
  }
  // Переборка элементов массива
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

// Задание 3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for(let i = 0; i < arrOfArr.length; i++){
    let result = func(...arrOfArr[i]);
    if (maxWorkerResult < result) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}