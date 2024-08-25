const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/create-todo");
const {getTodo} = require("../controllers/get-todo");
const { getTodoById } = require("../controllers/get-todo-by-id");
const { deleteTodo } = require("../controllers/delete-todo");

//define api routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;
