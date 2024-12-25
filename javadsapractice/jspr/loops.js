const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  console.log(num);
}

const greetings = "hello worlds!!!!!! ";
for (const greet of greetings) {
  console.log(greet);
}

const map = new Map();
map.set("IN", "india");
map.set("USA", " United states of America");
map.set("UK", "United Kingdom");
for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}

for (const [key, value] of map) {
  console.log(key, " :- ", value);
}

const myObject = {
  game1: "NFS",
  game2: "FIFA",
  game3: "Mortal Kombat",
};

for (const [key, value] of myObject) {
  console.log(key, " :- ", value);
}
