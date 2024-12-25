const express = require("express");
const http = require("http");
const port = 3000;
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello bantywithmoney World!');
// });

// app.post('/', (req, res) => {
//   res.send('You sent a POST request!');
// });

// app.put('/', (req, res) => {
//   res.send('You sent a PUT request!');
// });

// app.delete('/', (req, res) => {
//   res.send('You sent a DELETE request!');
// });

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World working on developing webpage ");
  } else if (req.url == "/ice-coffee") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World working on developing webpage  ice-coffee");
  } else if (req.url == "/tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World working on developing webpage  tea");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page not found ");
  }
});

app.listen(port, () => {
  console.log("Server started on port 3000");
});
