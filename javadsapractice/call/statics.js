class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`usename  : ${this.username}`);
  }
  createId() {
    return this.username + Math.floor(Math.random() * 1000);
  }
}

const kio = new User(" kio : ");
kio.createId();
kio.logMe();
console.log(kio.createId());
console.log(kio.logMe());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "iphone@apple.com");
iphone.logMe();
iphone.createId();
console.log(iphone.logMe);
console.log(iphone.createId());
