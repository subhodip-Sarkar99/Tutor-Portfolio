//import { courses } from "../constants/data";
import {Link} from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { useAuth } from "../store/auth";

export const Courses = () => {

    const {course}=useAuth();
    //console.log(course);
    
    return (
        <>
       
        <section className="bg-gray-50 min-h-screen">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-center font-bold text-2xl text-gray-800 capitalize lg:text-[3.5rem] lg:leading-[3.5rem] font-Montserrat">Explore <br /> The <span className="underline decoration-blue-500">Courses Offered</span></h1>

              <motion.div className="box"
          initial={{
            y:-150
          }}
          animate={{
            y:[150,0]
          }}
          transition={{
            duration:1,
            ease:"backInOut"
          }}
          
        >      
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

                    {course.map((curCourse) => {
                        return (
                            <div className="p-8 space-y-3 border-2 border-cyan-600 rounded-xl font-Roboto" key={curCourse._id}>
                                <h1 className="text-3xl font-semibold text-gray-700 capitalize">{curCourse.title}</h1>
                                <p className="text-gray-500"> {curCourse.content}</p>
                                <Link to="/contact" className="inline-flex p-1 text-cyan-600 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 hover:text-blue-600">
                                   Hurry!! Book Your Slot Today <span className="ml-1 text-2xl"><FaArrowCircleRight /></span>
                                </Link>
                            </div>
                        );
                    })}



                </div>
                </motion.div>
            </div>
        </section>
        <Footer />
        </>
        
    )

}