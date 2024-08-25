const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/create-todo");
const {getTodo} = require("../controllers/get-todo");
const { getTodoById } = require("../controllers/get-todo-by-id");
const { updateTodo } = require("../controllers/update-todo");

//define api routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo);

module.exports = router;
