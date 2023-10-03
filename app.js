const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const signupRoutes=require('./routes/signup');
const sequelize = require('./util/database');
const cors=require("cors")
app.use(cors())
app.use(bodyParser.json({ extended: false }));
app.use(signupRoutes)
sequelize.sync()
    .then((responce) => {
        app.listen(3000);
    })
    .catch(err => console.log(err))