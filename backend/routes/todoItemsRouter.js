const express = require("express");
const todoItemRouter = express.Router();

const todoItemController = require("../controllers/todoItemsController");

todoItemRouter.post("/item", todoItemController.createTodoItem);

module.exports = todoItemRouter;