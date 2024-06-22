const express = require('express');

const app = express();

require("dotenv").config();

const  PORT = process.env.PORT || 4000;

//MIDDLE WARE   
app.use(express.json());

const blog = require('./routes/blog')

app.use("/api/v1",blog);

const connectWithDb = require("./config/config");
connectWithDb();

app.listen(PORT,()=>{
    console.log(`app is running successfully on ${PORT} PORT `);
})

app.get("/",(req,res)=>{
    res.send("<h1>I am default route</h1>")
})