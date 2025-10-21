import express from "express"
import { Response , Request } from "express"
const app = express()

app.get('/' ,(req: Request , res:Response)=>{
    return res.json({
        message : "yo yo yo yoooo"
    })
})

app.listen(3000 ,()=>{
    console.log('the app is running on ' ,3000)
})