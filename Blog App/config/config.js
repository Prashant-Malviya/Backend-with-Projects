const mongoose = require(mongoose);

require("dotenv").config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(()=> console.log('db connected successfully!')).catch((error)=>{
        console.log('db facing some connection issues');
        console.error(error);
        process.exit(1);
    })
}

module.exports = connectWithDb;