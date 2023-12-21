let student1 = new Student('Игорь', 'мужской', 18);
let student2 = new Student('Михаил', 'мужской', 19);
let student3 = new Student('Мария', 'женский', 20);
let student4 = new Student('Ольга', 'женский', 21);
let student5 = new Student('Григорий', 'мужской', 23);

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}
  
Student.prototype.addMarks = function (...marksToAdd ) {
  if (this.marks != undefined) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks != undefined && this.marks.length > 0) {
    let result = this.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return result / this.marks.length;
  }
  return 0;  
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
