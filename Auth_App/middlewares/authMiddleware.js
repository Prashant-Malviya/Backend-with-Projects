// auth, isStudent, isAdmin

const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.auth = (req,res,next)=>{
    try {

        console.log("cookies token",req.cookies.token);
        console.log("body token",req.body.token);
        // console.log("request headers",req.header("Authorization"));
        
        
        
        // extract jwt token
        //pending : other ways to fetch token
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");
        
        if(!token){
            return res.status(401).json({
                success:false,
                message:'token missing',
            })
        }

        // verify the token 
        try {
            const payload = jwt.verify(token,process.env.JWT_SECRET);
            console.log("payload",payload);

            req.user = payload;
            
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:'token is invalid'
            })
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"something went wrong, while verifying the token",
        });
    }
}

exports.isStudent = (req,res,next)=>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"you are not authorized to access student route",
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"something went wrong, while verifying the token from student middleware",
        })
    }
}
exports.isAdmin = (req,res,next)=>{
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"you are not authorized to access admin route",
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"something went wrong, while verifying the token from admin middleware",
        })
    }
}