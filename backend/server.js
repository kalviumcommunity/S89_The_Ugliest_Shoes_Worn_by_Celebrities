const express = require("express");
const mongoose = require("mongoose");
const router = require("./router"); // Importing the router

const app = express();
app.use(express.json()); // Middleware for parsing JSON

mongoose.connect("mongodb://localhost:27017/yourDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Database connection error:", err);
});

// Use the routes
app.use("/", router);

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
