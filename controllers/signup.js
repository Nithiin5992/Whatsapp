const User=require('../models/signup')
exports.signupUser=(req,res,next)=>{
     User.create({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
     })
    res.status(200).json({success:true})
    console.log("nithin")
}