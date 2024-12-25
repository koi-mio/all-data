function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, My  name  is ${this.name}  and I am  ${this.age} years`);
};

const alice = new Person("Alice", 9989);
alice.greet();

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello , my name  is ${this.name}  and I am ${this.age} years`);
  }
}

const alice1 = new Person1("kiuoiueiouoj on", 908966789);
alice1.greet();

function student(name, roll) {
  this.name = name;
  this.roll = roll;
}

student.prototype.greet = function () {
  console.log(
    `Hello my name is ${this.name} and  i am  ${this.age} years log `
  );
};

function Student(name, age, grade) {
  student.call(this, name, age);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  console.log(`The ${this.name}  is studying grade  ${this.grade}`);
};

const bob = new Student("bob", 16, 11);
bob.greet();
bob.study();
