import mongoose from "mongoose";

const OtpValidate = new mongoose.Schema({
    email : {
        type: String,
        require : true
    },
    otp : {
        type: Number,
        require : true
    },
    createdAt: {
        type: Date,
        default: Date.now, 
        expires: '1m'  
    }
},{timestamps : true});

const UserOtp = mongoose.model("OtpUsers", OtpValidate);

export default UserOtp;