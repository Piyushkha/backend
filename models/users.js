const mongoose = require('mongoose')
var Schema = mongoose.Schema


const users = Schema({
    username: {
        type: String,

    },
    email: {
        type: String,


    },
    password: {
        type: String,

    },
    token: {
        type: String
    },
    gender: {
        type: String,

    },
    Dob: {
        type: Date,


    },
    profileImage: {
        type: String,


    },
    Bio: {
        type: String,
        default: "Hey I'm Using MyBook App"


    },
    profession: {
        type: String,

    },
    Hobby: {
        type: String,

    },
    
    isadmin:{
        type:Boolean,
    },

    emailOtp: {
        type: Number,


    },
    phoneOtp: {
        type: Number,

    },
    active: {
        type: Boolean,
        default: true

    },
  
    toBeLogOut: {
        type: Boolean,
        default: false

    },
    toBeLogin: {
        type: Boolean,
        default: false

    },
    isTermAccept: {
        type: Boolean,
        default: false

    },
    DelteteAccount: {
        type: Date
    },
    LastUpdate: {
        type: Date
    },
    profileView: {
        type: Number,
        default: 0
    },
    profileLike: {
        type: Number,
        default: 0
    },
    profileLike: [

        {
            userId: {
                type: String,
            }

        },

    ],

    phone: {
        type: Number
    },
    



}, { timestamps: true })





const userData = mongoose.model("userData", users);
module.exports = userData;



