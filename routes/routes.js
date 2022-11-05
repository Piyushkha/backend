const usercontroller = require('../controller/user_controller')
const friendcontroller = require('../controller/friends_Controller')
const task = require('../controller/tasks')
const uploads = require('../multer/multer')
const multer = require('multer')



const router = (app) =>{
    app.post('/user/signup',usercontroller.signInController)
    app.post('/user/login',usercontroller.userLogin)
    app.post('/user/emailcheck',usercontroller.checkEmailAndUsername)
    app.post('/user/update',uploads.any(),usercontroller.UpdateUser)

    app.post('/user/sendOtp',usercontroller.sendOtp)
    


    app.post('/user/friend',friendcontroller.addfriend)
    app.post('/user/getuser',friendcontroller.getUser)


    app.post('/user/getAllReq',friendcontroller.GetAllReq)
    app.post('/user/acceptReq',friendcontroller.acceptReq)
    app.post('/user/gerreqs',friendcontroller.getReq)

    //add tack
    app.post('/task/add',uploads.any(),task.addtask)
    app.post('/task/addtaskuser',task.addTaskAssignUser)
    app.get('/task/get',task.getAllTask)
    app.post('/task/deleteTaskUser',task.deleteTaskAssignUser)
    app.post('/task/updatetask',task.updateTask)
    app.post('/task/deletetask',task.daleteTask)
    app.post('/task/updateTaskUser',uploads.any(),task.updateTaskAssignUser)
    app.post('/task/getTaskUser',task.getTaskAssignByUser)







}



module.exports = router
