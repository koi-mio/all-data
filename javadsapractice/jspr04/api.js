const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

const https = require("https");

const xhr = https.get("https://jsonplaceholder.typicode.com/todos/1", (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(JSON.parse(data));
  });
});

xhr.on("error", (error) => {
  console.error("Error:", error);
});

const fs = require("fs");

const data = { name: "Alice" };
fs.writeFile("storage.json", JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log("Data written to file");
});

fs.readFile("storage.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data).name); // Output: Alice
});

const WebSocket = require("ws");

const socket = new WebSocket("ws://echo.websocket.org");

socket.on("open", function () {
  console.log("Connected");
  socket.send("Hello, WebSocket!");
});

socket.on("message", function (data) {
  console.log("Received:", data);
});

socket.on("close", function () {
  console.log("Disconnected");
});

const fetch = require("node-fetch");

fetch("https://api.opencagedata.com/geocode/v1/json?q=London&key=YOUR_API_KEY")
  .then((response) => response.json())
  .then((data) => {
    const location = data.results[0].geometry;
    console.log(`Latitude: ${location.lat}, Longitude: ${location.lng}`);
  })
  .catch((error) => console.error("Error:", error));

const { fork } = require("child_process");

const worker = fork("worker.js");

worker.on("message", (msg) => {
  console.log("Message from worker:", msg);
});

worker.send("Start processing");

process.on("message", (msg) => {
  if (msg === "Start processing") {
    // Perform some processing
    process.send("Processing complete");
  }
});
