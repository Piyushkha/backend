var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'piyushkhatri9024@gmail.com',
    pass: 'mfveqdjzmvitcfrb'
  }
});

const sendMail = async({email , subject ,text}) => {
    var mailOptions = {
        from: 'ram@gmail.com',
        to: email,
        subject: subject,
        text: text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });  
}

module.exports = sendMail