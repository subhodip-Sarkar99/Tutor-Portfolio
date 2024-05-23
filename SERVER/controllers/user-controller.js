import Course from "../models/course-model.js";
import Contact from "../models/contact-model.js";



const home= async(req,res)=>{
    
    try {
        res.status(200).send("API responding...");
    } catch (error) {
        res.status(400).send({message:"API not responding"});
    }
};


const contactForm=async(req,res)=>{
    //console.log(req);
    try {
        const response=req.body;
       
        if(!response){
            res.status(400).send("Empty data sent");
        }
        await Contact.create(response);
        res.status(201).json({message:"Message sent successfully"});
        
    } catch (error) {
        return res.status(500).json({message:"Message not delivered"});
    }
}

const userCourses=async(req,res)=>{
    try {
        const courses=await Course.find().sort({createdAt:-1});
        //console.log(courses);
        if(!courses || courses.length===0){
            return res.status(404).json({message:"No Contacts query found"});
        }
        return res.status(200).json({message:courses});
    } catch (error) {
       console.log(error);
    }
}



export default {home,contactForm,userCourses};