import express from "express";

const port = 3000;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Request received at root route");
  res.send("Hello hey welcome to server js page");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "One Joke", content: "This is one joke" },
    { id: 2, title: "Two Joke", content: "This is two joke" },
    { id: 3, title: "Three Joke", content: "This is three joke" },
    { id: 4, title: "Four Joke", content: "This is four joke" },
    { id: 5, title: "Five Joke", content: "This is five joke" },
  ];
  res.json(jokes);
});

app.post("/", (req, res) => {
  console.log("Received POST request:", req.body);
  res.send("From submitted");
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Item with ID ${id} updated.`);
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Item with ID ${id} deleted.`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
