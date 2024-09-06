import express from "express";
import { CheckRoute, CreateUser, AllUsers } from "../Controller/UserData.controller.js";
import { AddUsersOtp  } from "../Controller/OtpValidate.controller.js";
const route = express.Router();

route.get("/check", CheckRoute);
route.post("/adduser", CreateUser);
route.get("/alluser", AllUsers);

route.post("/otpgenerate", AddUsersOtp);
route.post("/finduserbyotp", FindUserbyOtp);

export default route;