import express from "express";
import { CheckRoute, CreateUser, AllUsers } from "../Controller/UserData.controller.js";
import { AddUsersOtp  } from "../Controller/OtpValidate.controller.js";
const route = express.Router();

route.get("/check", CheckRoute);
route.post("/Adduser", CreateUser);
route.get("/AllUser", AllUsers);

route.post("/OtpGenerate", AddUsersOtp);

export default route;