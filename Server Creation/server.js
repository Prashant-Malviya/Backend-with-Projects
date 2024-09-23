// Basic app for server creation 

// server instantiate 
const express = require('express');

const app = express();

// used to parse req.body in express --> Put or Post
const bodyParser = require('body-parser');

//specifically parse json data & add it to req.body object
app.use(bodyParser.json())


//activate the server on 3000 port
app.listen(3000, () => console.log('Server listening on port 3000'));

app.get('/',(req,res) =>{
    res.send("Server Started Successfully:)")
})

app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand); 
    res.send("car submitted successfully");    
})


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/carsDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{console.log("successfully connected db");
}).catch((error)=>{console.log("recieved an error",error);
})

