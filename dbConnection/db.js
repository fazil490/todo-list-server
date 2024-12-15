const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGO_DB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database is connected.");
  } catch (err) {
    console.log("Error connecting to database : ", err);
  }
};

module.exports = { connectDB };
