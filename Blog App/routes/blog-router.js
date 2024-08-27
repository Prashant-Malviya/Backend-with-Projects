const express = require('express');
const router = express.Router();

// import controller
const {dummyLink} = require("../controllers/post-controller");
const { createComment } = require('../controllers/comment-controller');


// create mapping

router.get("/dummyroute",dummyLink)
router.post("/comments/create",createComment)


// export
module.exports = router;