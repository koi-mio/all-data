// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return ` the encryptpassswordcodebitcoin ${this.password} || `;
//   }
//   changeUsername() {
//     return ` the ${this.username.toUpperCase()} `;
//   }
// }

// const chai = new User("kio ", "kio@google.com", "987897987989879");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `the encryptpasswordcodebitcoin ${this.password} ||`;
};

User.prototype.changeUsername = function () {
  return `the ${this.username.trim().toUpperCase()}`; // Added trim() to remove extra spaces
};

// Create a new User instance for 'lio'
const lio = new User("kio", "kio@google.com", "987897987");
console.log(lio.changeUsername()); // Outputs: "the KIO"

// Create a new User instance for 'coffee' correctly
const coffee = new User("mio", "mio@google.com", "1312319087");
console.log(coffee.encryptPassword()); // Outputs: "the encryptpasswordcodebitcoin 1312319087 ||"
