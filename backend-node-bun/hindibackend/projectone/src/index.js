// import connectDB from "./db/index.js";
// import dotenv from "dotenv";

// dotenv.config({
//   path: "./.env",
// });

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running  :  ${process.env.PORT} `);
//     });

//     app.on("Error  ", (error) => {
//       console.log(
//         "Error connecting to MongoDB. Please check your MongoDB connection string.",
//         error
//       );
//       throw error;
//     });
//   })
//   .catch((err) => {
//     console.log("Mongodb  connection  failed !!! ", err);
//   });

import connectDB from "./db/index.js";
import dotenv from "dotenv";
import express from "express";

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then(() => {
    // Handle errors before starting the server
    app.on("error", (error) => {
      console.error(
        "Error connecting to MongoDB. Please check your MongoDB connection string.",
        error
      );
      process.exit(1);
    });

    // Start the server
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("Mongodb connection failed!!!", err);
    process.exit(1);
  });
