require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const app = express();
connectDB(); // Database Connection

app.get("/", (req, res) => {
    res.json({ message: "Hey" });
})


app.listen(3000);