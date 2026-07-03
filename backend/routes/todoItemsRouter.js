const express = require("express");
const todoItemRouter = express.Router();

const todoItemController = require("../controllers/todoItemsController");

todoItemRouter.post("/", todoItemController.createTodoItem);

module.exports = todoItemRouter;