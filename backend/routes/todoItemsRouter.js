const express = require("express");
const todoItemRouter = express.Router();

const todoItemController = require("../controllers/todoItemsController");

todoItemRouter.get("/", todoItemController.getTodoItem);
todoItemRouter.post("/", todoItemController.createTodoItem);
todoItemRouter.put("/:id", todoItemController.updateTodoItem);
todoItemRouter.put("/:id/completed", todoItemController.markCompleted);
todoItemRouter.delete("/:id", todoItemController.deleteTodoItem);

module.exports = todoItemRouter;