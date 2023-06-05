//Import Express and MongoDB
const express = require('express');
const mongoose = require('mongoose');

//import Router
const routes = require('./Routers/index');

const host ='localhost';
const PORT=6003;
//MongoDB Connectiion String
const url="mongodb+srv://sundaravel:1234@cluster0.hvamb56.mongodb.net/Zomator?retryWrites=true&w=majority";
const app=express();
//Middleware to handle json data
app.use(express.json());

//Handling cors
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow_Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-type','Authorization');
    next();
})

//Navigate all req to router
app.use('/',routes);

//connect to Database and starting server
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(process.env.PORT || 6003,host,()=>{
        console.log(`Server running at ${host}:${PORT}`);
    });
})
    .catch((err)=>{
        console.log(err);
    })