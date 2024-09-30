// server.js
const express = require('express');
const mongoose = require('mongoose');
const carsRoutes = require('./routes/carsRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json()); // Built-in body parser

// Routes
app.use('/api/cars', carsRoutes);

// Global error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Successfully connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Server Started Successfully :)");
});
