const mongoose = require("mongoose");

// creating schema
const todoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
});

// creating model
const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
