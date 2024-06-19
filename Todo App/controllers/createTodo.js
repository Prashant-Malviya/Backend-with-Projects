const Todo = require('../models/Todo')

exports.createTodo = async(req,res)=>{
    try {

        // exteact title description from response body 

        const {title,description} = req.body;

        // create a new todo db and insert in db
        const response = await Todo.create({title,description})

        // send a json response with success flag 
        res.status(200).json({
            success:true,
            data:response,
            message:'entry created successfully'
        })
        
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:'internal server error',
            message:error.message,
        })
    }
}