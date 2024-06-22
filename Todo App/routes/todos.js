const express = require("express")
const router = express.Router();

// import controler 
const {createTodo} = require("../controllers/createTodo");
const {getTodos} = require("../controllers/getTodos");
const {getTodoById} = require("../controllers/getTodos");
const {updateTodo} = require("../controllers/getTodos");
const {deleteTodos} = require("../controllers/getTodos");


// define api route 
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodos);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodos/:id",deleteTodos);

module.exports = router;
