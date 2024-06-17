const express = require('express');

const app = express();

//used to parse req.body in express , used for put or post request
const bodyParser = require('body-parser');

// specifically parse json data & add it to the request.Body object
app.use(bodyParser.json());

app.listen(3000,()=> console.log('server started at port 3000'))

app.get('/',(req,res)=>{
    res.send("hellow ji kese ho sare")
})

app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body;
    console.log('name: ' , name, 'brand: ', brand);
    res.send('data submitted successfully ');
})

