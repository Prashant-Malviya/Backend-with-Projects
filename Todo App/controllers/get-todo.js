// import the model 
const Todo = require("../models/todo");

// define route handler

exports.getTodo = async(req,res)=>{
    try {
        
        // fetch all todo items from database

        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"entire data is fetched"
        })

    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error",
        })
    }
}