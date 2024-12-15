// Express
const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require("./dbConnection/db");
const todoModel = require("./models/todos");
const cors = require("cors");

// create an instance of express
const app = express();
app.use(express.json()); // to recieve the data in json
app.use(cors());

// connecting mongodb
connectDB();

// define a route
app.get("/", (req, res) => {
  res.send("Welcome to MERN - Todo Project");
});

// todo route
const todoRoute = require("./router/todoRoute");
app.use("/api/todo", todoRoute);

// start the server
const port = 7000;
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
