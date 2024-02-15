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

app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    UserModel.findOne({username:username})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("a")
                console.log(user.name)
            } else {
                res.json("WrongPassword")
                console.log("Please check your Password")
            }
        } else {
            res.json("NoUser.")
            console.log("No user exist please register first.")
        }
        
    })
})

app.listen(3001,()=>{
    console.log("MongoDB Connected by Sajeethan!!!")
})