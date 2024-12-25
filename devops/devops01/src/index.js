const express = require("express");
const fs = require("fs").promises;
const app = express();
const port = 3000;

const readFile = async (req, res, next) => {
  try {
    const data = await fs.readFile("example.txt", "utf8");
    req.fileData = data;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error reading file");
  }
};

const writeFile = async (req, res, next) => {
  try {
    const data = "Hello, World!";
    await fs.writeFile("example.txt", data);
    next();
  } catch (err) {
    
    console.error(err);
    res.status(500).send("Error writing file");
  }
};

app.get("/readfile", readFile, (req, res) => {
  res.send(req.fileData);
});

app.post("/02", writeFile, (req, res) => {
  res.send("File written successfully");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
