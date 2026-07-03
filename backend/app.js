const express = require("express");
const connectDB = require("./config/database");
const todoItemRouter = require("./routes/todoItemsRouter");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/todo", todoItemRouter);

// Connect Database
connectDB();

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Task Management API Running"
    });
});

module.exports = app;