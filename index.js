import express, { json } from "express"
import { connect } from "mongoose"
import cors from "cors"
import UserModel from "./models/Users.js";


const app = express()
app.use(json())
app.use(cors())

connect("mongodb+srv://sajeethan1902:sajeethan@sliot.pgr6zuf.mongodb.net/SLIoT")

app.post('/Users',(req,res)=>{
    UserModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("MongoDB Connected by Sajeethan!!!")
})