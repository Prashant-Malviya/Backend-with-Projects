

// import models

const Post = require("../models/post-model");
const Like = require("../models/like-model");

// like a post

exports.likePost = async (req,res)=>{
    try{
        const {post,user} = req.body;
        const like = new Like({
            post,user,
        })
        const savedLike = await like.save();

        // update post collection 
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}}, {new:true})
        .populate("likes").exec();

        res.json({
            post:updatedPost
        })

    }catch(error){
        return res.status(400).json({
            error:"error while liking post"
        })
    }
}


// unlike post
exports.unlikePost = async (req,res)=>{
    try {
        const {post,like} = req.body;

        //find and delete the like collection 
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like})

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}}, {new:true});

        res.json({
            post:updatedPost,
        })

    } catch (error) {
       return res.status(400).json({
        error:"error while deleting post"
       }) 
    }
}
