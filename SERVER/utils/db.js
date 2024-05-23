import mongoose from "mongoose";
import env from "dotenv";

env.config()

const URI=process.env.MONGODB_URI;

const connectDb= async()=>{
    try {
        await mongoose.connect(URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Unable to connect to Database",error);
        process.exit(0);
    }
    
};

export default connectDb;