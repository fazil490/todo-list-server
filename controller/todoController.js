const todoModel = require("../models/todos");

const getAllItems = async (req, res) => {
  try {
    const todos = await todoModel.find(); // find an item
    res.json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const createItem = async (req, res) => {
  const { title, description } = req.body; // destructuring the data from body
  try {
    const newItem = new todoModel({ title, description }); // creating a new model/row
    await newItem.save();
    res.status(201).json(newItem); // 201 - created an item successfully
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message }); // 500 - server error
  }
};

const updateItem = async (req, res) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;
    const updatedItem = await todoModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
      },
      { new: true } // to get the updated data
    );
    if (!updatedItem) {
      res.status(404).json({ message: "Item not found." }); // 404 - not found
    }
    res.send(updatedItem);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    await todoModel.findByIdAndDelete(id); // delete an item by id
    res.status(200).json({ message: "Item deleted successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createItem,
  getAllItems,
  updateItem,
  deleteItem,
};
