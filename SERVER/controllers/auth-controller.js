import Admin from "../models/admin-model.js";

// *** THE AUTH ROUTER IS THE ADMIN ROUTER SINCE AUTHENTICATION CAN ONLY BE DONE BY ADMIN ON THIS SITE ***

const home= async(req,res)=>{
    try {
       
        res.status(200).send("Admin Login page view access granted");
        
    } catch (error) {
        res.status(400).send({message:"Page not found"});
    }
};
//temp gen pass
/*const genPass=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const createAdmin=await Admin.create({
            email,
            password
        });
        //console.log(createAdmin);

        res.status(201).json("Reg successful");
        
    } catch (error) {
        next(error)
    }
}*/

//Admin Login Check
const adminLogin= async (req,res)=>{
    try {
        const {email,password}=req.body;
        const adminExist=await Admin.findOne({email});// returns data from collection
       
        if(!adminExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        const adminPassCheck=await adminExist.comparePassword(password);// returns boolean from admin-model.js

        if(adminPassCheck){
            res.status(200).json({
                message:"Login Successful",
                token:await adminExist.generateToken(),
                adminId: adminExist._id.toString()
            });
        }else{
            res.status(401).json({message:"Invalid email or password"});
        }
        
    } catch (error) {
        next(error);
    }
}

//Sending data of currently logged in admin
const admin= async(req,res)=>{
    try {
        const adminData=req.admin;
        //console.log(adminData);

        return res.status(200).json({adminData}); //Passing data to front end

    } catch (error) {
        console.log("error from the user route" ,error);
    }
};



export default {home,adminLogin,admin};