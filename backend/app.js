const express = require("express");
const connectDB = require("./config/database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Database
connectDB();

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Task Management API Running"
    });
});

module.exports = app;