const User = require('../models/signup');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

function generatetoken(id, premiumuser) {
   return jwt.sign({ userid: id }, 'secretkey');
 }

exports.signupUser = async (req, res, next) => {
   try {
      const email = req.body.email
      const username = req.body.username
      const password = req.body.password
      const existingUsers = await User.findOne({ where: { email: email } })
      if (!existingUsers) {
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
      else {
         res.status(401).json({ message: 'user already exists' })
      }
   }
   catch (err) { console.log(err) }
}

exports.loginUser = async (req, res, next) => {
   try {
      const email = req.body.email;
      const password = req.body.password;
      const existingUsers = await User.findOne({ where: { email: email } })
      if (!existingUsers) {
         res.status(404).json({ message: 'User not Found' })
         console.log('User not Found')
      }
      else {
         bcrypt.compare(password, existingUsers.password, (err, result) => {
            if (err) {

               res.status(500).json({ message: 'something went wrong' })
               console.log('User not authorized')

            }
            if (result === true) {

               res.status(202).json({ message: 'login successful', token: generatetoken(users[i].id) })

            }
            else {
               res.status(401).json({ message: 'User not authorized' })
            }
         })

      }


   }
   catch (err) { (console.log(err)) }
}