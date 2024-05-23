import express from "express";
import authControllers from "../controllers/auth-controller.js";
import adminController from "../controllers/admin-controller.js";
import authMiddleware from "../Middlewares/auth-middleware.js";
import { adminLoginSchema } from "../validators/zod-validator.js";
import validate from "../Middlewares/validate-middleware.js";

const router=express.Router();

router.route("/home").post(authControllers.home);

// router.route("/reg").post(authControllers.genPass);

router.route("/login").post(validate(adminLoginSchema),authControllers.adminLogin);

router.route("/admin-data").get(authMiddleware,authControllers.admin);

router.route("/users-contacted").get(authMiddleware,adminController.getContactData);

router.route("/users-contacted/delete/:id").delete(authMiddleware,adminController.deleContactsById);

router.route("/add-new-course").post(authMiddleware,adminController.addNewCourse);

router.route("/courses/delete/:id").delete(authMiddleware,adminController.deleteCourseById);

router.route("/course/:id").get(authMiddleware,adminController.getCourseById);

router.route("/course/update/:id").patch(authMiddleware,adminController.updateCourseById);


export default router;