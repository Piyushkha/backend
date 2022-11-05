const friends = require('../models/friends')
const User = require('../models/users')


module.exports = {
    getUser: async (req, res) => {

      

        // console.log(request);
       
        const user = await User.find({isadmin:false}) 
        const users = user.reverse()
      
        res.send({status:200,users})
   
    },
    addfriend: async (req, res) => {
        const { senderId, receiverId } = req.body;
        // const senderIds =await friends.findOne({senderId:req.body.senderId})
        // if(senderIds){ return res.send({status:400,message:"You are already send friend reqeust"})}
        if (!senderId) {
            res.send({ message: "Sender Id is required" })
        }
        if (!receiverId) {
            res.send({ message: "Receiver Id is required" })
        }
        const receiverIdCheck = await friends.findOne({ receiverId: receiverId })
        if (receiverIdCheck) {
            res.send({ message: "This receiver Id Already Sended Request" })



        } else {

            const docA = await friends({
                senderId: req.body.senderId,
                receiverId: req.body.receiverId,
                status: "panding"
            })

            try {

                const userdocA = await docA.save()
                res.send({ status: 200, message: "Reqest has been send", userdocA })


            } catch (e) {
                console.log(e);
            }
        }


    },
    GetAllReq: async (req, res) => {
        res.send("aa gys")

    },

    acceptReq: async (req, res) => {
        const reqId = req.body.id
        // const status = req.body.status
        try {
            const friend = await friends.findByIdAndUpdate(reqId, {
                $set: req.body
            }
            );
            //  const done = await friendreqId.save()
            await res.send({ message: "User Status Updated", friend })
        } catch (e) {
            console.log(e);
        }
    },
    getReq: async (req, res) => {
        const senderId = req.body.senderId
        const status = "panding"

        const request = await friends.find({ senderId: senderId, status: status })
        console.log("aa gya");
        res.send({ request })
    }



}


    // LogIn


// }