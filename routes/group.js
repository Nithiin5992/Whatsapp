const express=require("express");
const router=express.Router();
const authenticatemiddleware = require('../authenticate/middleware');
const groupController=require("../controllers/group")

router.post('/group',authenticatemiddleware.authenticate,groupController.postgroup)
router.get('/group',authenticatemiddleware.authenticate,groupController.getgroup)

router.post('/postgroupMembers',groupController.postgroupMembers)
router.get('/getgroupMembers',authenticatemiddleware.authenticate,groupController.getgroupMembers)
router.post('/postgroupMessages',authenticatemiddleware.authenticate,groupController.postgroupMessages)
router.get('/getgroupMessages',groupController.getgroupMessages)

module.exports=router;