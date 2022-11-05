const mongoose = require('mongoose')
var Schema = mongoose.Schema


const task = Schema({
    taskName: {
        type: String,

    },
    taskDec: {
        type: String,


    },
    formula: {
        type: String,

    },
    formulasytex: {
        type: String
    },
    taskStartDate: {
        type: Date,

    },
    
    taskSubmitDate:{
        type:Date
    },
    taskEndDate: {
        type: Date,

    },
    taskExampleImage:{
        type:String
    },
    taskAssignUsername:[
        {
            userName:String,
            userId:String,
            taskstatus:{
                type:Boolean,
                default:false
            },
            taskDoneProfeImage:{
                type:String
            },
            taskcomplitedDec:String,
            isTaskReject:{
                type:Boolean,
                default:false
            },
            taskComplitTime:{
                type:Date
            }
            
        }
    ]

    



}, { timestamps: true })


    


const userData = mongoose.model("tasks", task);
module.exports = userData;



