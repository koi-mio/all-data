let myHero = [" thor", "spiderman"];
let heroPower = {
  thor: "lio",
  spiderman: "mio",

  getSpiderPower: function () {
    console.log(`Spidy power is   ${this.spiderman}`);
  },
};

Object.prototype.kio = function () {
  console.log(`kio-mio is present in all objects : `);
};

Array.prototype.heykio = function () {
  console.log(`kio says hello `);
};
myHero.kio();
myHero.heykio();
heroPower.kio();

const User = {
  name: "kio-coder",
  email: "kiocoder@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment ",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Coffeeaurkio";
String.prototype.trueLength = function () {
  console.log(`${this.name}`);
  console.log(`${this}`);
  console.log("lio - kio ");
  console.log(`True length is : ${this.trim().length} `);
};

anotherUsername.trueLength();
