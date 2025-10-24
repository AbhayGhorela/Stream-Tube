import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connedtionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB connected !! DB Host:${connedtionInstance.connection.host}`)
    } catch (error) {
        console.log('MONOGODB connection error',error)
        process.exit(1)
    }
}

export default connectDB;