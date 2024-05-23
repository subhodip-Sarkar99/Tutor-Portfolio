import { z } from "zod";

const usercontactSchema= z.object({
    name: z
    .string({required_error: "Name required"})
    .trim()
    .min(3,{message:"Name must have atleast 3 characters"})
    .max(255, {message: "Name must not be more than 255 characters"}),
    email: z
    .string({ required_error: "Email required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
    phone: z
    .string({required_error: "Number required"})
    .trim()
    .min(10,{message:"Phone no. must be of 10 digits"})
    .max(13, {message: "Phone no. must be of 10 digits"}),
    message:z
    .string({required_error:"Name required"})
    
    });

    const adminLoginSchema=z.object({
        email:z
        .string({ required_error: "Email is required" })
  .trim()
  .email({ message: "Invalid email address" })
  .min(3, { message: "Email must be at least of 3 characters" })
  .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
  .string({ required_error: "Password is required" })
  .min(7, { message: "Password must be at least of 6 characters" })
  .max(1024, "Password can't be greater than 1024 characters"),
    })


export {usercontactSchema,adminLoginSchema};