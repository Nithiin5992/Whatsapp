const Group = require('../models/group');
const GroupUsers = require('../models/groupUsers');
const GroupMessages = require('../models/groupMessages');
exports.postgroup=async (req,res,next)=>{
    try{
       const groupdata=await Group.create({
            userId:req.userid,
            groupname:req.body.groupname,
            
            
        })
        res.status(201).json({success:true,groupdata:groupdata})

    }catch(err){
        console.log(err)
    }
}
exports.getgroup=async (req,res,next)=>{
    const data=await Group.findAll({where:{userId:req.userid}})
    res.status(202).json({success:true,data:data})
}

exports.postgroupMembers=async (req,res,next)=>{
    try{
        await GroupUsers.create({
            GroupId:req.body.groupId,
            username:req.body.username    
                                    
        })
        res.status(201).json({success:true})
    }catch(err){
        console.log(err)
    }
}
exports.getgroupMembers=async (req,res,next)=>{
    try{
        const id=req.header('authorization')
          const groupmembers=await GroupUsers.findAll({where:{groupId:id}})
        res.status(202).json({success:true,"groupmembers":groupmembers})
    }catch(err){
        console.log(err)
    }
}
exports.postgroupMessages=async (req,res,next)=>{
    try{
        const groupmessages=GroupMessages.create({
            GroupId:req.body.groupId,
            
            message:req.body.chatmessage   
                                    
        })
        res.status(201).json({success:true})
    }catch(err){
        console.log(err)
    }
}
exports.getgroupMessages=async (req,res,next)=>{
    try{
  
        const id=req.header('authorization')
        console.log(id)
        const groupmessages=await GroupMessages.findAll({where:{GroupId:id}})
        res.status(202).json({success:true,"groupmessages":groupmessages})
    }catch(err){
        console.log(err)
    }
}

exports.deletegroupMembers=async (req,res,next)=>{
    try{
        const username=req.header('authorization')
        await GroupUsers.destroy({where:{username:username}})
        res.status(202).json({success:true})
    }catch(err){
        console.log(err)
    }
}