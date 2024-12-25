const arr = [1, 2, 3, 4, 5];

console.log(arr.length);

arr.push(6);
console.log(arr);

const poppedElement = arr.pop();
console.log(poppedElement);

console.log(arr);

const shiftedElement = arr.shift();
console.log(shiftedElement);

console.log(arr);

arr.unshift(0);
console.log(arr);

const slicedArr = arr.slice(1, 3);
console.log(slicedArr);

const concatenatedArr = arr.concat([6, 7, 8]);
console.log(concatenatedArr);

const joinedArr = arr.join("-");
console.log(joinedArr);

arr.reverse();
console.log(arr);

arr.sort();
console.log(arr);

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

const users = [
  { name: "kio ", age: 90, occupation: "developer" },
  { name: "kio2", age: 20, occupation: "student" },
  { name: "mio3", age: 30, occupation: "teacher" },
];

users.forEach((user) => {
  console.log(` Name : ${user.name}`);
  console.log(` Age : ${user.age}`);
  console.log(` occupation : ${user.occupation}`);
  console.log(`=-=-=-=-=-=-=-=-=-=`);
});

const users1 = [
  { name: "John", age: 30, occupation: "Developer" },
  { name: "Jane", age: 25, occupation: "Designer" },
  { name: "Bob", age: 40, occupation: "Manager" },
];

const names = users1.map((user) => user.name);

console.log(names);

const users2 = [
  { name: "John", age: 30, occupation: "Developer" },
  { name: "Jane", age: 25, occupation: "Designer" },
  { name: "Bob", age: 40, occupation: "Manager" },
];

const developers = users2.filter((user) => user.occupation === "Developer");
console.log(developers);

console.log("=--=-=-=-=-=-=-=-=-=-=-=-");

const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((numbers) => {
  console.log(numbers);
});

const number = [1, 2, 3, 4, 5, 6];

const squre = number.map((number) => number ** 2);
console.log(squre);

console.log("-=-=-=---=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-");

const arraylist = [];

arraylist.push(1);
arraylist.push(2);
arraylist.push(3);

console.log(arraylist); // Output: [1, 2, 3]

arraylist.splice(1, 1);

console.log(arraylist); // Output: [1, 3]

console.log(arraylist.indexOf(1)); // Output: 0

console.log(arraylist.includes(2)); // Output: false

console.log(
  "==-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-==-=-=-=-=-=-=-=--="
);

class arraylists {
  constructor() {
    (this.element = []), (this.size = 0);
  }
  add(element) {
    this.element.push(element);
    this.size++;
  }
  remove(index) {
    if (index >= 0 && index < this.size) {
      throw new Error("Index out of bounds .....");
    }
    this.element.splice(index, 1);
    this.size--;
  }
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    return this.elements[index];
  }

  set(index, element) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    this.elements[index] = element;
  }

  indexOf(element) {
    return this.elements.indexOf(element);
  }

  lastIndexOf(element) {
    return this.elements.lastIndexOf(element);
  }

  contains(element) {
    return this.elements.includes(element);
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }

  clear() {
    this.elements = [];
    this.size = 0;
  }

  toString() {
    return this.elements.join(", ");
  }
}
class ArrayList {
  constructor() {
    this.elements = [];
    this.size = 0;
  }

  add(element) {
    this.elements.push(element);
    this.size++;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    this.elements.splice(index, 1);
    this.size--;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    return this.elements[index];
  }

  set(index, element) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    this.elements[index] = element;
  }

  indexOf(element) {
    return this.elements.indexOf(element);
  }

  lastIndexOf(element) {
    return this.elements.lastIndexOf(element);
  }

  contains(element) {
    return this.elements.includes(element);
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }

  clear() {
    this.elements = [];
    this.size = 0;
  }

  toString() {
    return this.elements.join(", ");
  }
}

// Example usage:
const arrayList = new ArrayList();
arrayList.add(1);
arrayList.add(2);
arrayList.add(3);
console.log(arrayList.toString()); // Output: "1, 2, 3"
arrayList.remove(1);
console.log(arrayList.toString()); // Output: "1, 3"
console.log(arrayList.get(0)); // Output: 1
arrayList.set(0, 4);
console.log(arrayList.toString()); // Output: "4, 3"
console.log(arrayList.indexOf(3)); // Output: 1
console.log(arrayList.lastIndexOf(3)); // Output: 1
console.log(arrayList.contains(3)); // Output: true
console.log(arrayList.isEmpty()); // Output: false
console.log(arrayList.size); // Output: 2
console.log(arrayList.isEmpty()); // Output: true
arrayList.clear();
