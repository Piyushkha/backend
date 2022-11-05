const friends = require('../models/friends')
const task = require('../models/tasks')


module.exports = {
    addtask: async (req, res) => {


        let avatar = "http://" + req.get("host") + "/upload/" + req.files[0].filename;
// console.log(avatar);

        const { taskName, taskDec, formula, taskExampleImage,taskAssignUsername, taskEndDate } = req.body;
        if (!taskName) return res.send({ message: "TaskName is Required" })
        if (!taskDec) return res.send({ message: "TaskDec is Required" })
        if (!taskAssignUsername) return res.send({ message: "TaskStartDate is Required" })
        if (!taskEndDate) return res.send({ message: "TaskEndDate is Required" })
        if (!formula) return res.send({ message: "Task Formula is Required" })

        else {
            const userTask = await task({
                taskName: taskName,
                taskDec: taskDec,
                formula: formula,
                taskExampleImage:avatar,

                taskStartDate: Date.now(),
                taskAssignUsername:taskAssignUsername,
                

                taskEndDate: taskEndDate
            })
          
                const tasks = await userTask.save()
                res.send({message:"Task Added", tasks, status: 200 })
           


        }
    },
    getAllTask: async (req, res) => {
        const ntask = await task.find();
        const tasks =await ntask.reverse()
        res.send({ tasks })
    },
    updateTaskAssignUser: async (req, res) => {

        let file = "http://" + req.get("host") + "/upload/" + req.files[0].filename;
            console.log(file);
            // return
        const id = req.body.id
        const status = req.body.taskstatus
        const taskUserId = req.body.userId
        const userName = req.body.userName
        const taskcomplitedDec = req.body.taskcomplitedDec
        const isTaskReject = req.body.isTaskReject
        const taskDoneProfeImage = file
        const taskComplitTime = Date.now()
        const updateTask = await task.findByIdAndUpdate(id, {
            $set: { "taskAssignUsername": { userId:taskUserId ,taskstatus:status,userName:userName,isTaskReject:isTaskReject,taskcomplitedDec:taskcomplitedDec,taskDoneProfeImage:taskDoneProfeImage,taskComplitTime:taskComplitTime } },

        }, { upsert: true, new: true }
        )
        res.send({message:"Thanks for Task Complite", updateTask })
    },
    addTaskAssignUser: async (req, res) => {
        const taskId = req.body.id
        const userName = req.body.userName
        const userId = req.body.userId

        const updateTask = await task.findByIdAndUpdate(taskId, {
            $push: { "taskAssignUsername": { userName: userName, userId: userId } },

        }, { upsert: true, new: true }
        )
        res.send({ updateTask })
    },
    deleteTaskAssignUser: async (req, res) => {
        const taskId = req.body.id
        const taskuserId = req.body.id
        const userName = req.body.userName


        const deletedTask = await task.findByIdAndUpdate(taskId, {
            $pull: { "taskAssignUsername": { userName: userName } },

        }, { upsert: true, new: true }
        )
        res.send({ deletedTask })
    },
    updateTask: async (req, res) => {
        const taskId = req.body.id



        const tasks = await task.findByIdAndUpdate(taskId, {
            $set: req.body

        }, { upsert: true, new: true }
        )
        res.send({ tasks })
    },
    daleteTask: async (req, res) => {
        const taskId = req.body.id



        const tasks = await task.findByIdAndRemove(taskId);
        
        res.send({ tasks,message:"Task Deleted" })
    },
    getTaskAssignByUser: async (req, res) => {
        const id = req.body.id
        const status = req.body.taskstatus
        const isTaskReject = req.body.isTaskReject

        const updateTask = await task.find(
        {"taskAssignUsername.userId":id,"taskAssignUsername.taskstatus":status,"taskAssignUsername.isTaskReject":isTaskReject}
        )
        const users = updateTask.reverse();
        res.send({status:200, users })
    },






}


    // LogIn


// }