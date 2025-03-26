const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Define Mongoose Schema and Model directly in this file
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
});

const User = mongoose.model("User", userSchema);

// POST route
router.post("/post", async (req, res) => {
    const { name, age, gender } = req.body;
    const user = new User({ name, age, gender });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET route
router.get("/get", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT route
router.put("/put/:id", async (req, res) => {
    const { name, age, gender } = req.body;
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(id, { name, age, gender }, { new: true });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE route
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (user) {
            res.status(200).send("The user is deleted successfully");
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
