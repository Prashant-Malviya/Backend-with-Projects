const express = require("express");
const app = express();

//dotenv
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require('./routes/blog-router')

//mount
app.use("/api/v1",blog)

const connectWithDb = require('./config/db')
connectWithDb();

//start the server

app.listen(PORT,()=>{
    console.log(`app started at port no. ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send(`<h1>this is home page krishna</h1>`)
})