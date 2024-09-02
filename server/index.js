import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import Data from "./Db/Data.Db.js";
import route from "./Route/Verified.Route.js";
const app = express();

dotenv.config();
const port = process.env.PORT || 4000;


app.use(cors({
    origin: "http://localhost:5173/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}))

app.use(express.json());
Data();

app.use("/api",route);

app.listen(port,()=>{
    console.log("server run on port no . : " + port);
})
