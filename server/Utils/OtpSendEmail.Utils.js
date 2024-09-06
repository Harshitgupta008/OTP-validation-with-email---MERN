import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "Harshitgupta@gmail.com",
        pass: process.env.USER_EMAIL_PASS,
    },
});

// Message from  Harshit :-  if you want know more informaition check doc of nodemiller and enjoy 
// from for Sender Email
// to for Reciver Eamil
// html are not mendetory

const SendMail = async (email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: "Harshitgupta@gmail.com", 
            to: email,
            subject: "Email from Harshit check your otp and verify 😊", 
            text: `Your opt are ${otp} by Harshit gupta`,
            html: `<b>Your opt are ${otp} by Harshit gupta</b>`,
        });
        return console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.log("error in sendemail Utils : " + error);
        throw error;
    }
}

export  { SendMail } ;