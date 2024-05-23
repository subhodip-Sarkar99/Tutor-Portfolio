import express from "express";
import cors from "cors";
import userRoute from "./router/user-route.js"
import connectDb from "./utils/db.js";
import adminRoute from "./router/admin-router.js";
import errorMiddleware from "./Middlewares/error-middleware.js";
import env from "dotenv";


const app=express();

env.config();

const corsOptions={
    origin:"http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    credentials:true,
};

app.use(cors(corsOptions));

app.use(express.json());

const port=process.env.PORT;

//User Route
app.use("/api/user",userRoute);


//Admin Routes
app.use("/api/admin",adminRoute);



app.use(errorMiddleware);

connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`);
    });
})
