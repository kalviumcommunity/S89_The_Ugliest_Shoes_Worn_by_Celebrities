const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully!');
}).catch((err) => {
    console.error('MongoDB connection failed:', err);
});

// Routes
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/status', async (req, res) => {
    try {
        await mongoose.connection.db.admin().command({ ping: 1 }); // Pinging the database
        res.send('Database connection status: Connected!');
    } catch (error) {
        res.send('Database connection status: Failed to connect.');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
