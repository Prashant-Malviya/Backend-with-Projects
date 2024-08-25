const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/create-todo");
const {getTodo} = require("../controllers/get-todo");

//define api routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);

module.exports = router;
