let fruits = ["apple", "banana", "cherry"];

let numbers = new Array(1, 2, 3, 4, 5);

console.log(fruits);
console.log(numbers);

fruits.push("date");
fruits.unshift("avcado ");
fruits.splice(2, 0, "blueberry");

fruits.pop();
fruits.shift();
fruits.splice(1, 1);

console.log(fruits[0]);

fruits.forEach((fruits) => {
  console.log(fruits);
});

let uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(uppercaseFruits);

let person = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "coding"],
};

let person2 = new Object();
person2.name = "Bob";
person2.age = 25;
person2.hobbies = ["gaming", "traveling"];

class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

let person3 = new Person("Charlie", 35, ["painting", "cooking"]);

console.log(person3);
console.log(person2);
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
console.log(Person.prototype);


