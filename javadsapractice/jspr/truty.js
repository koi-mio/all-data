// for (let a = 0; a <= 10; a++) {
//   console.log(`Outer loop value  : ${a}`);
//   for (let b = 0; b <= 10; b++) {
//     // console.log(`Inner loop value  ${b} and inner loop  ${a}`);
//     console.log(a + " * " + b + " = " + a * b);
//   }
// }

// for (let index = 0; index <= 20; index++) {
//   if (index == 5) {
//     console.log(" Detected 5");
//     // continue;
//     break;
//   }
//   console.log(` Value of i is  ${index} `);
// }

let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}

let myArray = ["flathub", "snap", "apt"];
let arr = 0;
while (arr < myArray.length) {
  console.log(`the arrray is this ${myArray[arr]}`);
  arr = arr + 1;
}

let score = 0;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score < 11);
