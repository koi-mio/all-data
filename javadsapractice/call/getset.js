const person = {
  name: "Alice",
  age: 25,
};

Object.defineProperty(person, "name", {
  set: function (newName) {
    this.name = newName;
  },
});

const newName = "lasdkjl";
person.name = newName;
console.log(person.name);