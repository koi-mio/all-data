const marvel_hero = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

const marvel_villain = ["loki", "ultron", "venom"];
const dc_villain = ["joker", "lex luthor", "general zod"];

marvel_hero.push(dc);
dc_villain.push(marvel_villain);
marvel_hero.push(dc_villain);
marvel_hero.push(marvel_villain);

console.log(marvel_hero);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log(dc_villain);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log(marvel_hero);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log(marvel_hero);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
console.log(Array.isArray("bantywithmoney"));
console.log(Array.from("bantywihtmoney"));
console.log(Array.from("bantywithmoney", (char) => char.charCodeAt(0)));
console.log(Array.from("bantywithmoney", (char) => char.toUpperCase()));
console.log(Array.from("bantywithmoney", (char) => char.toLowerCase()));
console.log(Array.from("bantywithmoney", (char) => char.split("")));
console.log(
  Array.from("bantywithmoney", (char) =>
    char.split("").map((char) => char.charCodeAt(0))
  )
);
console.log(
  Array.from("bantywithmoney", (char) =>
    char.split("").map((char) => char.toUpperCase())
  )
);
console.log(
  Array.from("bantywithmoney", (char) =>
    char.split("").map((char) => char.toLowerCase())
  )
);
console.log(
  Array.from("bantywithmoney", (char) =>
    char.split("").map((char) => char.split(""))
  )
);
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

const jsUser = {
  name: "bantywithmoney",
  age: 25,
  occupation: "Software Developer",
  location: "nagpur",
  hobbies: ["reading", "coding", "gaming"],
  email: "kiomio23@gmail.com",
  phone: "1234567890",
  isLoggedIn: false,
  lastLoginDays: ["mondey", "sundey"],
};

console.log(jsUser);
console.log(jsUser.age);

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "kio-mio";
tinderUser.isLoggedIn = false;
console.log(tinderUser);
console.log(tinderUser.isLoggedIn);

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

const regularUser = {
  email: "kiodeveloperopenai.com",
  password: "skldjo8r7894@#$",
  fullname: {
    userfullname: {
      firstname: "mio-developer",
      lastname: "kiomio",
    },
  },
  address: {
    street: "123 main st",
    city: "nagpur",
    state: "maharashtra",
    zip: "440010",
  },
  phone: "1234567890",
  isLoggedIn: false,
  lastLoginDays: ["mondey", "sundey"],
};
console.log(regularUser);

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
