const express = require('express');

const app = express();

// load config from env file 

require("dotenv").config();

const PORT = process.env.PORT || 4000;

// middleware to parse json req body 

app.use(express.json());

// import routes from todo api 
const todoRoutes = require("./routes/todos");

app.use("api/v1/",todoRoutes);

// db connect
const dbConnect = require('./config/dbConnection');
dbConnect();

// start the server 
app.listen(PORT,()=> console.log(`server started at port ${PORT} successfully`));

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is default route</h1>`)
})