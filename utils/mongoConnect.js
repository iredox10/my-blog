import mongoose from "mongoose";

const connectMongoose = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongoose connect')
    } catch (err) {
        console.log(err)
    }
}

export default connectMongoose