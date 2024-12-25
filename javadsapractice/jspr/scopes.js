// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "kio-mio";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}
one();
console.log(one);

console.log("=-=-=-=-=-=-=----=-=-==-=-=-=-=-=-=-=-=-=");

if (true) {
  const username = "bantywithmoney";
  if (username === "kio-mio") {
    const website = "youtube";
    console.log(website);
  }
  console.log(username);
}

console.log("=-=-=-=-=-=-=----=-=-==-=-=-=-=-=-=-=-=-=");

function addone(num) {
  return num + 1;
}
addone(5);
console.log(addone);

const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
console.log("a;lsdkfj", addTwo(123213, 1212323));

console.log("=-=-=-=-=-=-=----=-=-==-=-=-=-=-=-=-=-=-=");

const user = {
  username: "mio-nio",
  price: 90909090,

  welcomeMessage: function () {
    console.log(` ${this.username} , welcome to website .........`);
    console.log(this);
  },
};

user.welcomeMessage();
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
function chai() {
  console.log(this);
}
chai();

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log(" Allow to buy course ........");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user is logged in .............");
}

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
