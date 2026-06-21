import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDatabase(): Promise<void> {
  console.log("Mongo URI:", env.MONGODB_URI);

  await mongoose.connect(env.MONGODB_URI);

  console.log("Connected to MongoDB");
}