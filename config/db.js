const mongoose = require('mongoose')
const uri = "mongodb://44.207.233.97/mytask"

mongoose.connect(uri,(err,cb)=>{
    if(err) throw err
    console.log("Database connected");
})
