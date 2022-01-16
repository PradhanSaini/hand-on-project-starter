const express = require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("DB is connected .......");
}).catch((err)=>{
    console.log(err);
})

const app=express();

app.get("/hello-world",(req,res)=>{
    res.send("Hello Pradhan") ;
})

app.listen(process.env.PORT || 3000,()=>{
    console.log(`PORT ${process.env.PORT} is running ......`)
})


