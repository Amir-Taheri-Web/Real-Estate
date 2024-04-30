import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) return;

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to DB");
  } catch (error) {
    console.log("Connection to DB failed!");
  }
};

export default connectDB;
