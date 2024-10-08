const express = require('express');
const router = express.Router();

const {signup, login} = require("../controllers/authController");
const { auth, isStudent, isAdmin } = require('../middlewares/authMiddleware');

router.post("/login",login);
router.post('/signup',signup);

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to protected route, test route"
    })
})

//Protected Route
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to protected student route"
    })
})
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:'welcome to the protected route for admin'
    })
})

module.exports = router;