const express = require("express");
const app = express();
const User = require("./models/userModel");
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());


app.use(express.json());

require("./config/db").connect();

// route import and mount
const user = require('./routes/userRouter');
const router = require("./routes/userRouter");
const { auth } = require("./middlewares/authMiddleware");
app.use("/api/v1",user);

//activate

app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`);
})

router.get("/getEmail",auth, async(req,res)=>{
    try {
        const id = req.user.id;
        const user = await User.findById({id});

        res.status(200).json({
            success:true,
            user:user,
            message:'welcome to the email route'
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message,
            message:'some error occured'
        })
    }
})

