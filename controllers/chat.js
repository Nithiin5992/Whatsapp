const Messages = require('../models/chat');
exports.messages=async (req,res,next)=>{
    try{
       const chatBox=await Messages.create({
            userId:req.userid,
            name:req.user.username,
            message:req.body.message
        })
        res.status(201).json({chatBox:chatBox})

    }catch(err){
        console.log(err)
    }
}
exports.getMessages=async (req,res,next)=>{
    try{
        const getMessages=await Messages.findAll()
       
        
        res.status(202).json({getMessages:getMessages,success:true})
        
    }catch(err){
        console.log(err)
    }
}