const express = require("express");
const router = express.Router();

// import controller
const { createPost, getAllPosts } = require("../controllers/post-controller");
const { createComment } = require("../controllers/comment-controller");
const { likePost, unlikePost } = require("../controllers/like-controller");

// create mapping

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

// export
module.exports = router;
