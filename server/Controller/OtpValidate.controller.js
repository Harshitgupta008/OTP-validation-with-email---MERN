import User from "../Modles/User.modles.js";
import UserOtp from "../Modles/UserOtp.modles.js";

const AddUsersOtp = async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) {
        return res.send("All field are mendetory");
    }

    try {

        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return res.status(400).send("User are not exist");
        }

        const checkUserOpt = await UserOtp.findOne({ email });
        if (checkUserOpt){
            checkUserOpt.otp = req.body.otp;
            await checkUserOpt.save();
            return res.status(200).send("otp updated");
        }else{
            const newOptUser = new UserOtp({
                email : req.body.email,
                otp : req.body.otp
            })
            await newOptUser.save();
            return res.status(200).send("email created");
        }
    } catch (error) {
        console.log("error in AddUserOtp controller : " + error);
    }

}

export { AddUsersOtp };