const express = require("express")
const router = express.Router();

// import controler 
const {createTodo} = require("../controllers/createTodo");
const {getTodos} = require("../controllers/getTodos");


// define api route 
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodos);

module.exports = router;
