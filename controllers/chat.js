const Messages = require('../models/chat');
exports.messages=async (req,res,next)=>{
    try{
       const chatBox= Messages.create({
            userId:req.userid,
            message:req.body.message
        })
        res.status(201).json({chatBox:chatBox})

    }catch(err){
        console.log(err)
    }
}