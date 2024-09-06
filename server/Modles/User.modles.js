import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },

}, { timestamps: true });


const User = mongoose.model("UserValidate", UserShema);

export default User;
