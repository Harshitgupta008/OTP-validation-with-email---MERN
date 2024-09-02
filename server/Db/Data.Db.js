import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const db = process.env.MONGO_URL;

const Data = async ()=>{
    try {
        await mongoose.connect(db);
        console.log("Data are connected ");
        
    } catch (error) {
        console.log("error in data part :: "+error)
    }
}

export default Data;