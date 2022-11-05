const mongoose = require('mongoose')
const uri = "mongodb://localhost:27017/mytask"

mongoose.connect(uri,(err,cb)=>{
    if(err) throw err
    console.log("Database connected");
})