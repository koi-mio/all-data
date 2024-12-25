let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers);
numbers.push(6);
console.log(numbers);

let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

let person = {
  name: "Alice",
  age: 23,
  hobbies: ["reading", "coding"],
};

console.log(person.name);
console.log(person["age"]);

let uniqueNumber = new Set([1, 2, 3, 4, 4]);
console.log(uniqueNumber);

let map = new Map();
map.set("name", "Jhon");
map.set("age", 90);
console.log(map.get("name"));

let array = [1, 2, 3];
let iterator = array[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

let generator = idGenerator();
console.log(generator.next().value);
console.log(generator.next().value);

try {
  console.log("Start of try block");
  let x = undefined;
  console.log(x.y);
  console.log("End of try block");
} catch (error) {
  console.log(`An error occured : ${error.message}`);
} finally {
  console.log("This  will always run ");
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("division  by zero  is not allowed");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log(`An error  occured  : ${error.message}`);
}

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function checkValue(value) {
  if (value < 0) {
    throw new CustomError("Value is negative");
  }
  return value;
}

try {
  let result = checkValue(-10);
  console.log(result);
} catch (error) {
  console.log(`An error occurred: ${error.name} - ${error.message}`);
}

const add = (a, b) => a + b;
console.log(add(2323, 67867867));

const name = "sa;lkdf";
const age = 23;
console.log(` Name: ${name} Age: ${age} `);

const person1 = { name: "BObes", age: 8998 };
const { name: personName, age: personAge } = person1;
console.log(personName, personAge);

const numbers1 = [1, 2, 3];
const [first, second] = numbers1;
console.log(first, second);

const moreNumbers = [...numbers1, 3, 4];
console.log(moreNumbers);

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}
            years old.`);
  }
}

const alice = new Person("Alice", 25);
alice.greet(); 
// Output: Hello, my name is Alice and I am 25 years old.
