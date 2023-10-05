const User = require('../models/signup');
const bcrypt=require("bcrypt")
exports.signupUser =async (req, res, next) => {
try{
   const email = req.body.email
   const username = req.body.username
   const password = req.body.password
const existingUsers = await User.findOne({where : {email : email}})
 if(!existingUsers){
   const saltgrounds = 10;
   bcrypt.hash(password, saltgrounds, async (err, hash) => {
      const data = await User.create({
         username: username,
         password: hash,
         email: email,
      
      })
      res.status(201).json({ newuser: data, message: 'signup successful' })
      console.log('signup successful')
   })
}
else{
   res.status(401).json({message:'user already exists'})
}
}
catch (err){console.log(err) }}

