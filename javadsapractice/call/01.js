function SetUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const ko = new createUser("kio-mio", "kio2134@google.com", "0980987080");
console.log(ko);
