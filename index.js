require("dotenv").config();
const express = require('express');
const app = express();
const routes = require('./router/routes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',routes);



app.get('/',(req,res)=>{
    res.send("Hello World.!")
})

app.listen(8000,()=>{
    console.log("server is running..!")
})