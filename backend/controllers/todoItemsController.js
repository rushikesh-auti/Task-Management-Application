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