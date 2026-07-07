const TodoItem = require("../models/TodoItem");

exports.createTodoItem = async (req, res) => {
  try {
    const { task, date } = req.body;

    if (!task || !date) {
      return res.status(400).json({
        success: false,
        message: "Task and date are required.",
      });
    }

    const todoItem = await TodoItem.create({
      task,
      date,
    });

    res.status(201).json({
      success: true,
      message: "Todo created successfully.",
      data: todoItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getTodoItem = async (req, res) => {
  const todoItems = await TodoItem.find();
  res.json(todoItems);
}

exports.deleteTodoItem = async (req, res) => {
  const { id } = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(204).json({ _id: id });
}

exports.markCompleted = async (req, res) => {
  const { id } = req.params;
  const todoItem = await TodoItem.findById(id);
  todoItem.completed = true;
  await todoItem.save();
  res.json(todoItems);
}

