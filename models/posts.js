const mongoose = require('mongoose')
var Schema = mongoose.Schema

const Posts = Schema({
    userId:{
        type:mongoose.Types.ObjectId,ref:"userdatas"
    },
    postUrl:{
        type:String
    },
    postDetails:{
        type:String
    },
    postlike:[{
        type:String,
        
    }],
    postlike:{
type:Number
    },
    
},{timestamps: true})

const UserPosts = mongoose.model("UserPost",Posts)
module.exports = UserPosts;
