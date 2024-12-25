const user = {
  username: "bantywithmoney",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database .... ");
    console.log(this);
    console.log(this.username);
  },
};

console.log(user);
console.log(user.getUserDetails);
console.log("---______-------______------______------");
console.log(user.username, user.loginCount, user.signedIn);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username} `);
  };
  return this;
}

const userOne = User("kio-mio", 89898, true);
// console.log(userOne);
const userTwo = User("niocoder", 909090900, false);
console.log("the UserOne  kio := ", userOne.constructor);
console.log(userTwo);
