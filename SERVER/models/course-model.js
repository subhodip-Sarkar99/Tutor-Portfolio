import mongoose from "mongoose";

const courseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true});

const Course=new mongoose.model("Course",courseSchema);

export default Course;