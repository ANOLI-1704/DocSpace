const express = require("express");
const connectDB = require("./db");

const app = express();

const PORT = 5000;

connectDB();

app.get("/", (req, res) => {
    res.send("Welcome to DocSpace API");
});

app.listen(PORT, () => {
    console.log(`DocSpace server running on http://localhost:${PORT}`);
});