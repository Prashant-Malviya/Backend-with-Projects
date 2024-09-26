
const express = require("express");
const router = express.Router();

const {login,signup} = require("../controllers/authController");

const {auth,isStudent,isAdmin} = require("../middlewares/authMiddleware")

router.post("/login",login);

router.post("/signup",signup);

// protected router

router.get("/test",auth, (req,res)=>{
    res.json({
        success:true,
        message:'welcome to the protected route for tests'
    })
})

router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:'welcome to the protected route for students',
    });  
});

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for admin"
    });
});

module.exports = router;