const express=require("express");
const router=express.Router();
const signupController=require('../controllers/signup')

router.post('/signup',signupController.signupUser)
router.post('/login',signupController.loginUser)
module.exports=router