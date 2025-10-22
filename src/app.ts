import express from "express"
import { connectDb } from "./db.js"
import { Response , Request } from "express"
import { User } from "./db.js"
const app = express()

app.get('/' ,(req: Request , res:Response)=>{
    return res.json({
        message : "yo yo yo yoo0oo"
    })
})

app.get('/user' ,(req: Request , res:Response)=>{

    const user = User.create({
        name :"samay",
        password:"raja ji"
    })
    
    return res.json({
        message : "yo yo yo yoo0oo",
        user
    })
})



connectDb().then(()=>{
    app.listen(3000 ,()=>{
        console.log('the app is running on ' ,3000)
    })
}).catch((error)=>{
    console.log('something went wrong db not running')
})