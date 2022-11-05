const mongoose = require('mongoose')

var Schema = mongoose.Schema

const friendsSchema =  Schema({
    senderId:{
      type:mongoose.Types.ObjectId,
      ref:"userdatas"
    },
    receiverId:{
      type:String
    },
    status:{
      type:String,
      // default:"panding"
    }

  }, {timestamps: true})
  module.exports = mongoose.model('Friends', friendsSchema)