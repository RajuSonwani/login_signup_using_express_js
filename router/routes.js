require("dotenv").config(); //for .env_file
require("../core/pool"); // for db/knex connection
const express =require('express');
const route = express.Router();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// Authentication
const auth = require('./methods/auth');
// route.use('/private',(req,res, next)=>{
//     const authHead = req.headers["authorization"];
//     const token = authHead&&authHead.split(" ")[1];
//     if(token==null) return res.sendStatus(401);
//     jwt.verify(token,process.env.SrKey,(err)=>{
//         if(err) return res.sendStatus(403);
//         next();
//     })
// })

// methods
const signup =require('./methods/signup')
route.post('/signup',signup);

const login =require('./methods/login')
route.post('/login',login);

const private =require('./methods/private');
route.get('/private',auth, private);

module.exports = route;

