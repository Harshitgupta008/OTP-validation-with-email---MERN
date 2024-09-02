import User from "../Modles/User.modles.js";

const CheckRoute = (req, res) => {
    return res.send("Server run successfully")
}

const CreateUser = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.send("email are mendetory");
        }
        const response = new User({
            email: req.body.email,
        })
        const check = await User.findOne({ email });
        if (check) {
            return res.status(400).send("email already exist");
        }else{
            await response.save();
            return res.status(200).send( `${email} are added successfully`);
        }
    } catch (error) {
        console.log("error in createUser controller : " + error);
    }
}

const AllUsers = async(req,res)=>{

    try {
        const check = await User.find({});
        return res.json({ check });
    } catch (error) {
        console.log("error in AllData controller : " + error);
    }
}

export { CheckRoute, CreateUser, AllUsers };
