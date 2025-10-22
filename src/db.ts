import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 name : String,
 password : String
})

const User = mongoose.model('User' , userSchema)

const connectDb =async()=>{
    try {
        mongoose.connect( `${process.env.MONGO_URL}/docker-pratice`||'mongodb://localhost:27017/docker-pratice')
        console.log('the db has been conntected succesfully')
    } catch (error) {
        console.log('the error is for connect the db is ',error)
    }
}

export {
    connectDb,
    User
}