'use strict';

function parseCount(value) { 
    let result = Number.parseFloat(value);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (b + c) < a || (a + c) < b) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter () {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimeter * 0.5; // Переменная введена, чтобы облегчить чтение кода.
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle (a1, b1, c1) {
    try {
        return new Triangle(a1, b1, c1);
    } catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
              },
              get area() {
                return 'Ошибка! Треугольник не существует';
              }
        }
    }
}