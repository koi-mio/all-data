class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello , my name is  ${this.name}  and I am ${this.age} year`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  greet() {
    super.greet();
    console.log(` ${this.name}  is a student in grade ${this.grade}`);
  }
}

const alice = new Person("Alice ", 89809987);
const bob = new Student("moiasjdf", 90998, 567569908);

alice.greet();
bob.greet();

function kio(name, age) {
  let _name = name;
  let _age = age;

  this.getName = function () {
    return _name;
  };
  this.setName = function (name) {
    _name = name;
  };
  this.getAge = function () {
    return _age;
  };

  this.setAge = function (age) {
    _age = age;
  };

  this.greet = function () {
    console.log(` Hello my name is ${_name}  and I am  ${_age} years old `);
  };
}

const bio = new kio("Aliceasd  ansdlkf  ", 89879789);
bio.greet();
bio.setName("wopeiru jskjcnk");
bio.setAge(89088908);
bio.greet();

const _name = new WeakMap();
const _age = new WeakMap();

class vio {
  constructor(name, age) {
    _name.set(this, name);
    _age.set(this, age);
  }
  getName() {
    return _name.get(this);
  }
  setName(name) {
    _name.set(this, name);
  }
  getAge() {
    return _age.get(this);
  }
  setAge(age) {
    _age.set(this, age);
  }
  greet() {
    console.log(
      `Hello ,  my name is ${this.getName()}  and I am  ${this.getAge()}`
    );
  }
}

const joker = new vio("noiosd kjnsk vcb", 98897897897);
joker.greet();
joker.setName("nibosdfpos ........ ");
joker.setAge(890324880);
joker.greet();

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    console.log(`Diving the ${this.make}  ${this.model}`);
  }
}

class Motorcycle extends Vehicle {
  revEngine() {
    console.log(`Revving the engine of ${this.make} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
  }

  start() {
    console.log(`Starting the ${this.make} ${this.model} from ${this.year}`);
  }

  drive() {
    console.log(`Driving the ${this.make} ${this.model} from ${this.year}`);
  }
}

console.log("-=-=-==-=-");

const myCar = new Car("Toyota", "Camry", 2020);
myCar.start();
myCar.drive();

const myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster");
myMotorcycle.drive();
myMotorcycle.revEngine();

console.log(myMotorcycle);

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

function Asd(name, age) {
  this.name = name;
  this.age = age;
}

Asd.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

Asd.prototype.greet01 = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age}...`);
};

const mio = new Asd("kio-mio", 30);
mio.greet();
mio.greet01();
function Student1(name, grade, roll) {
  Asd.call(this, name, grade);
  this.roll = roll;
}

Student1.prototype = Object.create(Asd.prototype);
Student1.prototype.constructor = Student1;

Student1.prototype.study = function () {
  console.log(`${this.name} is studying guide ${this.grade}.`);
};

console.log(Student1);

const wer = new Student1(" webdeveloper ", "A+", 12345);
wer.greet01();
wer.study();
console.log(wer);
console.log(wer.constructor);
