const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

const coffee = {
  name: "coffee",
  price: 10,
  description: "coffee",
  isAvailable: true,
  oderCoffee: function () {
    console.log("Coffee is not ready bro  ..........");
  },
};

console.log(coffee);
console.log(Object.getOwnPropertyDescriptor);
console.log(Object.getOwnPropertyDescriptors(coffee));

Object.defineProperty(coffee, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (let [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(
      ` the Objects working developing Key : ${key} ... and Value : ${value}  ... `
    );
  }
}

const radius = 5;
const circuomference = 2 * Math.PI * radius;
console.log(`The circumference of the circle  is ${circuomference}`);

const radius1 = 545;
const area = Math.PI * Math.pow(radius1, 2);
console.log(`The area of the circle is: ${area}`);

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

const degrees = 90;
const radians = degreesToRadians(degrees);
console.log(` 90 degrees is ${radians}  radians`);

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

const radians1 = Math.PI / 2;
const degrees1 = radiansToDegrees(radians1);
console.log(`${radians1} radians is ${degrees1} degrees`); // Output: 1.5707963267948966 radians is 90 degrees

function sineOfDegrees(degrees) {
  const radians = degrees * (Math.PI / 180);
  return Math.sin(radians);
}

const degrees2 = 30;
const sine = sineOfDegrees(degrees2);
console.log(`The sine of 30 degrees is: ${sine}`); // Output: The sine of 30 degrees is: 0.49999999999999994

function cosineOfDegrees(degrees) {
  const radians = degrees * (Math.PI / 180);
  return Math.cos(radians);
}

const degrees3 = 60;
const cosine = cosineOfDegrees(degrees3);
console.log(`The cosine of 60 degrees is: ${cosine}`); // Output: The cosine of 60 degrees is: 0.5000000000000001
