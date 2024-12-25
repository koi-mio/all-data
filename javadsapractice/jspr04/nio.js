function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person("Alice ", 234234);
alice.greet();

const numbers = [1, 2, 3, 4, 5];
const double = (num) => num * 2;
const doubleNumbers = numbers.map(double);
console.log(doubleNumbers);

function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(3));

function multiply(a, b) {
  return a * b;
}

const double1 = multiply.bind(null, 2);
console.log(double1(5));

const pureFunction = (a, b) => a + b;
console.log(pureFunction(2, 3)); // Output: 5

const numbers1 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers1.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
