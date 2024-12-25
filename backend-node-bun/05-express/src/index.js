import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
const port = process.env.port || 3001;

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ........ ${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection error ......... ", err);
    process.exit(1);
  });
