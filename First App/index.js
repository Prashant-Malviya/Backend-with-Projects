const express = require("express");

const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log('server is running on port 3000');
})

 app.get("/",(req,res)=>{
     res.send("hello world");
 })

app.post("/car",(req,res)=>{
    res.send("post request is working");
})