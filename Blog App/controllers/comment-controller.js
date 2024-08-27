// import models
const Post = require("../models/post-model");
const Comment = require("../models/comment-model");

exports.createComment = async (req, res) => {
  try {
    // fetch data from req body

    const { post, user, body } = req.body;

    //create new comment object

    const comment = new Comment({
      post,
      user,
      body,
    });

    // save the new comment into the database
    const savedComment = await comment.save();

    //find the post by id and add the new comment to its comments array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    ).populate("comments").exec() // here we use push oprator to update a new entry
    // and we use pull operator to delete a entry
    // populate the comments array with comment documents
    //.exec() is used to execute the operation

    res.json({
        post:updatedPost,
    });


  } catch (error) {
    return res.status(500).json({
        error:"error while creating comment",
    })
  }
};
