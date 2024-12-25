let name = "Jhon";
let age = 30;
let isStudent = true;
let hobbies = ["reading ", "coding "];
let person = { name: "ALice", age: 9999 };

console.log(
  `my name is ${name}  , I am ${age}  years old , and i a student ${isStudent}`
);

let x = 1900;
x += 4;
console.log(x);

if (age >= 18) {
  console.log("You  are an adult ");
} else {
  console.log("you  are a minor ");
}

let day = "Monday ";
switch (day) {
  case "monday":
    console.log("It s monday");
    break;

  case "Tuesday":
    console.log("it's tuesday");
    break;
  default:
    console.log("It's another day .");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

function greet(name) {
  return `Hello , ${name} !!`;
}
console.log(greet("Alice ........"));
