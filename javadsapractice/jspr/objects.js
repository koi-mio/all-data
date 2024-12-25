const tinderUser = new Object();
tinderUser.id = " owie93849389849328";
tinderUser.name = "Owie";
tinderUser.age = 25;
tinderUser.location = "New York";
tinderUser.photo = "https://example.com/owie.jpg";
tinderUser.matches = 0;
tinderUser.swipes = 0;
console.log(tinderUser);

console.log("=-=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=");

const regularUser = {
  id: "owie93849389849328",
  name: "Owie",
  age: 25,
  location: "New York",
  photo: "https://example.com/owie.jpg",
  matches: 0,
  fullname: {
    userfullname: {
      firstname: "kioo",
      lastname: "mio",
    },
  },
};
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

console.log("=-=-=-=-=-=-=-=-=-=");

function addtwonumber(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result = addtwonumber(908080809, 234324234234);
console.log(" Result is : ", result);

function loginUserMange(username = "sam") {
  if (!username) {
    console.log("please enter a username ............");
    return;
  }
  return `${username} just logged  in https://google.com`;
}
console.log(loginUserMange());

console.log("=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==");

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(2323, 55656, 8978877, 98923, 2323));

const user = {
  username: "hitesh coudary coder",
  email: "hitesh@gmail.com",
};
+
function handleObject(anyobject) {
  const { username, email } = user;
  console.log(username);
  console.log(email);
}
handleObject();
