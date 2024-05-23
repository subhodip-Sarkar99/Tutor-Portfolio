import express from "express";
import userController from "../controllers/user-controller.js";
import limiter from "../Middlewares/rateLimit-middleware.js";
import {usercontactSchema } from "../validators/zod-validator.js";
import validate from "../Middlewares/validate-middleware.js";


const router=express.Router();

router.route("/").get(userController.home);

router.route("/courses").get(userController.userCourses);

router.route("/contact").post(limiter,validate(usercontactSchema),userController.contactForm);


export default router;