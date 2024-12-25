function multipleBy5(num) {
  this.num = num;
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5);
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
createUser.prototype.increment = function () {
  this.score++;
  this.username;
};
createUser.prototype.printMe = function () {
  console.log(`the username ${this.username} score is ${this.score}`);
};

const chai = new createUser("chai", 89898);
const coffee = new createUser("coffee ", 89980909890);

chai.printMe();
coffee.printMe();
