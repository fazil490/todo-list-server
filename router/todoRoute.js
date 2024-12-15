const express = require("express");
const {
  createItem,
  getAllItems,
  updateItem,
  deleteItem,
} = require("../controller/todoController");
const router = express.Router();

// create a new item
router.post("/create", createItem);

// get all items
router.get("/get", getAllItems);

// update an item
router.put("/edit/:id", updateItem);

// delete an item
router.delete("/delete/:id", deleteItem);

module.exports = router;
