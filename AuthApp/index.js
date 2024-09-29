// server.js (Main entry point)
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db"); // Import the DB connection function
const userRouter = require("./routes/userRouter");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use Helmet to set secure HTTP headers
app.use(helmet());

// Log HTTP requests (in development, use more detailed logging)
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev")); // Detailed logs in dev environment
}

// Connect to the database
connectDB();

// Mount user routes
app.use("/api/v1/users", userRouter);

// Set the port from environment or default
const PORT = process.env.PORT || 4000;

// Global error handler (placeholder for more detailed error handling)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong!"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
