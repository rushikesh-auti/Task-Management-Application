const express = require("express");
const connectDB = require("./config/database");
const todoItemRouter = require("./routes/todoItemsRouter");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://task-management-application-rushi.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/todo", todoItemRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Management API Running",
  });
});

module.exports = app;