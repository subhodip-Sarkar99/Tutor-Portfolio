import jwt from "jsonwebtoken";
import env from "dotenv";
import Admin from "../models/admin-model.js";

env.config();

const authMiddleware= async(req,res,next)=>{
    const token=req.header("Authorization");

    if(!token){
        return res.status(401).json({message:"Unauthorized HTTP, Token not provided"});
    }
    const jwtToken=token.replace("Bearer","").trim();

    try {
        const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);

        const adminData=await Admin.findOne({email:isVerified.email}).select({
            password:0,
        });
        req.admin=adminData;
        req.token=token;
        req.adminId=adminData._id;

        next();

    } catch (error) {
        return res.status(401).json({message:"Unauthorized, Invalid Token"});
    }
};

export default authMiddleware;