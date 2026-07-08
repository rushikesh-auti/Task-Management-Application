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
  try {
    const todoItems = await TodoItem.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: todoItems.length,
      data: todoItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteTodoItem = async (req, res) => {
  try {
    const { id } = req.params;
    const todoItem = await TodoItem.findById(id);

    if (!todoItem) {
      return res.status(404).json({
        success: false,
        message: "Todo not found.",
      });
    }

    await TodoItem.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.markCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const todoItem = await TodoItem.findById(id);

    if (!todoItem) {
      return res.status(404).json({
        success: false,
        message: "Todo not found.",
      });
    }

    todoItem.completed = !todoItem.completed;
    await todoItem.save();

    res.status(200).json({
      success: true,
      message: todoItem.completed
        ? "Task marked as completed."
        : "Task marked as pending.",
      data: todoItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};