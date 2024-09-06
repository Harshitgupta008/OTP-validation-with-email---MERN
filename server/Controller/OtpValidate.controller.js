import User from "../Modles/User.modles.js";
import UserOtp from "../Modles/UserOtp.modles.js";
import { SendMail } from "../Utils/OtpSendEmail.Utils.js";
const AddUsersOtp = async (req, res) => {
    const { email } = req.body;
    let otp = Math.floor(Math.random() * 9000) + 1000;
    if (!email || !otp) {
        return res.send("All field are mendetory");
    }

    try {

        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return res.status(400).send("User are not exist");
        }

        const checkUserOpt = await UserOtp.findOne({ email });
        if (checkUserOpt) {
            checkUserOpt.otp = otp;
            SendMail(email, otp)
            await checkUserOpt.save();
            return res.status(200).send("otp updated");
        } else {
            const newOptUser = new UserOtp({
                email: req.body.email,
                otp: otp
            })
            SendMail(email, otp)
            await newOptUser.save();
            return res.status(200).send("email created");
        }
    } catch (error) {
        console.log("error in AddUserOtp controller : " + error);
    }

}

const FindUserbyOtp = async (req, res) => {
    const otp = req.body;
    if (!otp) return res.send("Enter your otp");
    try {
        const check = await UserOtp.findOne({ otp });
        if (!check) return res.status(400).send("opt not valid");

        const newcheck = await User.findOne({ email: check.email });
        if (!newcheck) {
            return res.status(401).send("email not found")
        } else {
            return res.status(200).json({ "user found ": newcheck.name });
        }


    } catch (error) {
        console.log("error in FindUserbyOtp controller : " + error);
    }
}
export { AddUsersOtp, FindUserbyOtp };