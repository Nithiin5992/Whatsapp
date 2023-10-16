const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const signupRoutes=require('./routes/signup');
const chatRoutes=require('./routes/chat')
const groupRoutes=require('./routes/group')
const sequelize = require('./util/database');
const cors=require("cors")

app.use(bodyParser.json({ extended: false }));
app.use(cors())
app.use(signupRoutes)
app.use(chatRoutes)
app.use(groupRoutes)
sequelize.sync()
    .then((responce) => {
        app.listen(8080);
    })
    .catch(err => console.log(err))