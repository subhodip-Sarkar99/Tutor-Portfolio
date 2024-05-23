import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
  
});

 
 /*adminSchema.pre('save',async function(next){
    
    //console.log("this :",this);
    const user=this;
    

    if(!user.isModified("password")){
        next()
    }
    try {
        const saltRounds=await bcrypt.genSalt(10);
        const hash_pass=await bcrypt.hash(user.password,saltRounds);
        user.password=hash_pass;
               
    } catch (error) {
        next(error);
    }
 });*/

 //Password Check
 adminSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
 };

 //JSON Web Token
 adminSchema.methods.generateToken=function(){
    try {
        return jwt.sign({
            adminId:this._id.toString(),
            email:this.email,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"10h",
        }
    );
    } catch (error) {
        console.log(error);
    }
 }

 const Admin=new mongoose.model("Admin",adminSchema);

 export default Admin;