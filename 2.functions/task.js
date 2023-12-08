function getArrayParams(...arr) {

  // Максимальное значение
  let max = Math.max(...arr);
  // Минимальное значение
  let min = Math.min(...arr);
  // Среднее значение
  BufferVariable = arr.reduce((acc, item) => acc + item);
  avg = Number.parseFloat((BufferVariable / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Сумма элементов
function summElementsWorker(...arr) {
  let result;
  if (arr == undefined || arr == 0) {
    result = 0;
  } else {
    SummElements = arr.reduce((acc, item) => acc + item);
    result = SummElements;
  }
  return result; 
}

// Разница между максимальным и минимальным значениями
function differenceMaxMinWorker(...arr) {
  let result;
  if (arr == undefined || arr == 0) {
    result = 0;
  } else {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    result = max - min;
  }    
  return result;
}

// Разница между суммами чётных и нечётных чисел
function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let result;
  // Проверка не пуст ли массив
  if (arr == undefined || arr == 0) {
    result = 0;
  } else {
    // Переборка элементов массива
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] % 2) == 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
    result = sumEvenElement - sumOddElement;
  }    
  return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result;
  // Проверка не пуст ли массив
  if (arr == undefined || arr == 0) {
    result = 0;
  } else {
    // Переборка элементов массива
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] % 2) == 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    result = sumEvenElement / (countEvenElement);
  }    
  return result;
}

function makeWork(arrOfArr, func) {
  if (arrOfArr == undefined || arrOfArr == 0) {
    func = 0;
  } else {
    func = 1;
  }
  return func;
}
