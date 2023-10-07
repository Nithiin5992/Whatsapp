const express=require("express");
const router=express.Router();
const authenticatemiddleware = require('../authenticate/middleware');
const messageController=require("../controllers/chat")

router.post('/message',authenticatemiddleware.authenticate,messageController.messages)

module.exports=router;