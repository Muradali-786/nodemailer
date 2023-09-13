const nodemailer = require("nodemailer");

const sendMail=async(req,res)=>{

    let testAccount=await nodemailer.createTestAccount();

    //conect with the smpt
    let transporter=await nodemailer.createTransport({
      
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'keaton.glover@ethereal.email',
                pass: 'PffJ87K1pnuMUbmFnR',
            }
    });

    let info = await transporter.sendMail({
        from: '"Murad Ali KHAN👻" <murad@gmail.com>', // sender address
        to: "itsmurad07@gmail.com, zafarswati520@gmail.com", // list of receivers
        subject: "joining msg ✔", // Subject line
        text: "hello murad ali khan , hope you are doing well?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });


      console.log("message sent : %s",info.messageId)
res.json(info);
};

module.exports=sendMail;