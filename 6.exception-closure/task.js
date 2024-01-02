function parseCount(value) { 
    let result = Number.parseFloat(value);
    if (isNaN(result) === true) {
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
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.a + this.c) < this.b) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter () {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = (this.a + this.b + this.c) * 0.5;
        let d = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        const k = d.toFixed(3);
        return k;
    }
}

let a1 = new Triangle(a, b, c);
function getTriangle (a, b, c) {
    
    try {
        return a1.perimeter;
    } catch (error) {
        return error;
    }
}