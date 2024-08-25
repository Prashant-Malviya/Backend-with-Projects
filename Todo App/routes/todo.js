const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/create-todo");

//define api routes
router.post("/createTodo",createTodo);

module.exports = router;
