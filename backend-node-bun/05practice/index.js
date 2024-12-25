import express from "express";
const app = express();
const port = 3000;
app.use(express.json());

let coffeeData = [];
let nextId = 1;

app.post("/coffee", (req, res) => {
  const { name, price, store, sr_no } = req.body;
  const newCoffee = {
    id: nextId++,
    name,
    price,
    store,
    sr_no,
  };
  coffeeData.push(newCoffee);
  res.status(201).send(newCoffee);
});

app.get("/coffee", (req, res) => {
  res.status(200).send(coffeeData);
});

app.get("/coffee/:id", (req, res) => {
  const { id } = req.params;
  const coffee = coffeeData.find((coffee) => coffee.id === Number(id));
  if (coffee) {
    res.status(200).send(coffee);
  } else {
    res.status(404).send("Coffee not found");
  }
});

app.put("/coffee/:id", (req, res) => {
  const coffee = coffeeData.find((t) => t.id === parseInt(req.params.id));
  if (!coffee) {
    res.status(404).send("Coffee not found");
  }
  const { name, price, store, sr_no } = req.body;
  coffee.name = name;
  coffee.price = price;
  coffee.store = store;
  coffee.sr_no = sr_no;
  res.status(200).send(coffee);
});

app.delete("/coffee/:id", (req, res) => {
  const coffee = coffeeData.find((t) => t.id === parseInt(req.params.id));
  if (coffee === -1) {
    res.status(404).send("Coffee not found");
  } else {
    coffeeData.splice(coffee, 1);
    res.status(200).send("Coffee deleted");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

console.log(coffeeData);
console.log(nextId);
