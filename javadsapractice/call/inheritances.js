class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.username = username;
    this.password = password;
  }
  addCourse() {
    console.log(`A new Course was added by ${this.username}`);
  }
}

const chai = new Teacher("vio", "vio@openai.com", "a;lsi7r847");
chai.logMe();
chai.addCourse();
const mit = new User("kio", "kio@microsoft.com", "asfLKUIIkjnsdc2328*&^*&^");
mit.logMe();
