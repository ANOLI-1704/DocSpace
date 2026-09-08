require("dotenv").config();

const express = require("express");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");

const app = express();

const PORT = 5000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to DocSpace API");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`DocSpace server running on http://localhost:${PORT}`);
});