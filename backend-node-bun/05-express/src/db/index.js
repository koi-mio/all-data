import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb://localhost:3000/${DB_NAME} && ${process.env.MONGODB_URI}`,
    );
    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    console.log("different  connected mongodb ............... ");
  } catch (error) {
    console.log(" Mongodb connection error ..... ", error);
    process.exit(1);
  }
};

export default connectDB;
