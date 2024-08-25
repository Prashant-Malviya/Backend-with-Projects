const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true, // Optional, depending on your Mongoose version
            useUnifiedTopology: true, // Optional, depending on your Mongoose version
        });
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Issue in DB connection:", error.message);
        process.exit(1); // Exit the process with a failure code
    }
};

module.exports = dbConnect;
