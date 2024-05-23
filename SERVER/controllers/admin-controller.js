import Contact from "../models/contact-model.js";
import Course from "../models/course-model.js";

const getContactData=async(req,res)=>{
    try {
        const contacts=await Contact.find().sort({createdAt:-1});
        //console.log(contacts);
        if(!contacts || contacts.length===0){
            return res.status(404).json({message:"No contacts query found"});
        }
        return res.status(200).json({message:contacts});
    } catch (error) {
        next(error);
    }
};

//Deleting contact functionality
const deleContactsById=async(req,res)=>{
    try {

    const id=req.params.id;
    await Contact.deleteOne({_id:id});

    res.status(200).json({message:"Contact  successfully deleted"});
        
    } catch (error) {
        next(error);
    }
    
};

//Add new Course functionality
const addNewCourse=async(req,res)=>{
    try {
        const response=req.body;

        if(!response){
            res.status(400).send("Empty data sent");
        }
        //console.log(response);
        await Course.create(response);
        res.status(201).json({message:"New Course Added"});
    } catch (error) {
       res.status(500).json({message:"Internal Server Error"});
    }
    const response=req.body;

};

//Show course data to frontend
const deleteCourseById=async(req,res)=>{
    try {
        const id=req.params.id;
    await Course.deleteOne({_id:id});

    res.status(200).json({message:"Course successfully deleted"});
        
    } catch (error) {
        next(error);
    }
}

//Display course By Id
const getCourseById=async(req,res)=>{
    try {
        const courseId=req.params.id;
        const data=await Course.findOne({_id:courseId},{title:1,content:1});
        return res.status(200).json({message:data});
    } catch (error) {
      next(error);
    }
};

const updateCourseById=async(req,res)=>{
    try {
        const courseId=req.params.id;
    const updatedData=req.body;
    const updateTheData=await Course.updateOne({_id:courseId},{$set:updatedData});

    return res.status(200).json({message:"Data update Successfully"});

    } catch (error) {
        next(error);
    }
    
}


export default {getContactData,deleContactsById,addNewCourse,deleteCourseById,getCourseById,updateCourseById};