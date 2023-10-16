const express=require("express");
const router=express.Router();
const signupController=require('../controllers/signup')

router.post('/signup',signupController.signupUser)
router.post('/login',signupController.loginUser)
router.get('/getUsers',signupController.getUsers)
module.exports=router