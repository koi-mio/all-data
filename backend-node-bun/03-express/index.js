import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
import logger from "./logger.js";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";

app.use(morgan(morganFormat, {
  stream: {
    write: (message) => {
      const logObject = {
        method: message.split(" ")[0],
        url: message.split(" ")[1],
        status: message.split(" ")[2],
        responseTime: message.split(" ")[3],
      };
      logger.info(JSON.stringify(logObject));
    },
  },
}));

let teaData = [];
let nextId = 1;

app.post("/teas", (req, res) => {
  logger.info("A post request is made to add a new teas -_-_-")
  const { name, price } = req.body;
  const newTea = {
    id: nextId++,
    name,
    price,
  };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

app.get("/teas/:id", (req, res) => {
  const { id } = req.params;
  const tea = teaData.find((tea) => tea.id === Number(id));
  if (tea) {
    res.status(200).send(tea);
  } else {
    res.status(404).send("Tea not found");
  }
});

app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    res.status(404).send("Tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});

app.delete("/teas/:id", (req, res) => {
  console.log("Tea data is deleted na");
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(404).send("Tea not found");
  }
  teaData.splice(index, 1);
  res.status(200).send("Tea data deleted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
