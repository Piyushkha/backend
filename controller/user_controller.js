const userData = require('../models/users')
const cryptoJs = require('crypto-js')
const sendOtpemail = require('../helper/sendEmail')

function generateOTP() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
module.exports={

    
    
    // var myemail = "lovely@gmail.ocm";
    
     sendOtp :async(req,res) => {
    try{
    
        const {email , signup} = req.body;
        if(email == null) return res.send({status:400,message:"Email is required"})
    //    else if(fiels['email'].la)

    
    // const otpsending = new User({
    //     email:req.body.email
    // })
    else{
    let otp = generateOTP();
    
    
    let sendData = {
        email :email,
        subject : 'OTP VERIFICATION',
        text : `OTP is ${otp}`,
    
    }
    
    
    try{
        await sendOtpemail(sendData);
        // res.status(200).json("otp sended")
        res.send({status : 200 ,message : 'OTP Send Successfully' , otp : otp})
    
    
    
    }catch(e){
        console.log(e);
    }
    
} 
    
    //     if(type === 'signup'){
    //         //Send Otp 
    //         await sendOtp(sendData)
    //         res.send({status : 200 ,message : 'OTP Send Successfully' , otp : otp})
    //     }else if(type === 'forgot'){
    // let getUser = await User.findOne({email : email})
    // if(getUser){
    //     await sendOtpemail(sendData)
        
        // res.send({status : 200 ,message : 'OTP Send Successfully' , otp : otp})
    
    // }else{
    //     res.send({status : 400 ,message : 'User is not registered this email'})
    
    // }
    
    //     }
    
    }catch(error){
        res.send({status: 400 , message : error.message})
    }
    },
    
    checkEmailAndUsername:async(req,res)=>{
        const useremail =await userData.findOne({email:req.body.email})
        if(useremail){ return res.send({status:400,message:"email is already exit"})}
        else{
            return res.send({status:200})
        }

    },

    //Sign-In 
    signInController:async(req,res)=>{
        // res.send("aa gya");
        const{username,email,password}=req.body
        if(username == null) return res.send({status:400,message:"Username is required"})

        if(email == null) return res.send({status:400,message:"Email is required"})

        if(password == null || req.body.password == "") return res.send({status:400,message:"Password is required"})
        const useremail =await userData.findOne({email:email})
        if(useremail){ return res.send({status:400,message:"email is already exit"})}

        // const userEmails = req.body.email
        
        else{
    
        const users = userData({
            email:req.body.email,
            username:req.body.username,
            password:cryptoJs.AES.encrypt(req.body.password,"!@#$%^&*()"),
            isadmin:false
        })
        try{
            const saveUsers =await users.save();
            res.send({status:200,message:"User Created",saveUsers})

        }catch(e){
            console.log(e);
        }
    }
    },
    // LogIn 

    userLogin:async(req,res)=>{
        // res.send("aa gya")
        // console .log("aa gya");
        try {
            const users = await userData.findOne({
                email: req.body.email
            });
            !users && res.status(401).json({status:400,message:"Wrong Email id"});
                    
            const hashPassword = cryptoJs.AES.decrypt(users.password, "!@#$%^&*()")
            const chpassword = hashPassword.toString(cryptoJs.enc.Utf8);

            chpassword !== req.body.password && res.status(401).json({status:400,message:"Wrong password "});



            res.json({status:200,message:"Login Done",users })



        } catch (e) {
            console.log(e);
        }
    },UpdateUser:async(req,res)=>{

        let file = "http://" + req.get("host") + "/upload/" + req.files[0].filename;

        const Id = req.body.id
        const profileImage = file;
        var updatedUser;
        try {
            if(profileImage!=null){
                 updatedUser =await userData.findByIdAndUpdate(Id,{
                    profileImage:profileImage 
                });
            }else{

                
               updatedUser  =await userData.findByIdAndUpdate(Id,{
                    $set:req.body 
                });
                
            }



            res.json({ message: "User Updated",updatedUser })



        } catch (e) {
            console.log(e);
        }
    }
}