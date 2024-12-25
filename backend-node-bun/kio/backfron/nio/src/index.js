import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `Server is running on port  http://localhost:${process.env.PORT}`,
        process.env.PORT
      );
    });
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("mongodb error connection failed ...... ", err);
  });
