const Todo = require('../models/todo');

exports.getTodoById = async(req,res)=>{
    try {
        //extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given id",
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data successfully fetched`,
        })
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:'server error',
        })
    }
}