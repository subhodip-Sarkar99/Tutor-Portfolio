import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../store/auth.jsx";

export const CoursesOfferedCard = () => {

    const {course}=useAuth();

    return (
        <section className="bg-gray-50"><br />
            
            <h2 className="text-3xl text-left font-bold tracking-tight text-gray-900 sm:text-5xl px-14 py-2">
              Courses Offered
            </h2>
                <motion.div className="box"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2.6 }}
            >
                <div className="grid grid-rows-1 xl:grid-cols-2 xl:gap-4 2xl:grid-cols-4 gap-2 p-1 lg:p-4 m-5 justify-items-center">
                    {/* Used slice to display the latest 4 courses only as it suits the UI experience for users */}
                    {course.slice(0,4).map((curCourse) => {
                        return (
                            <div className="card card-compact shadow-2xl border-4 border-cyan-400 bg-gray-50" key={curCourse._id}>
                                <figure><img src="/images/upto-g12.png" alt="Courses" className="md:w-[10rem] h-[10rem]"/></figure>
                                <div className="card-body w-[100%] overflow-hidden">
                                    <h2 className="card-title font-Montserrat font-semibold text-xl text-cyan-900 italic"> {curCourse.title}</h2><br />
                                    {/*<p className="font-Roboto font-light text-xl lg:font-normal leading-8">{course.shortDesc}</p>*/}
                                    <div className="card-actions justify-center">
                                       <Link to="/courses"> <div role="button" className="btn bg-cyan-500 font-Montserrat text-white text-xl hover:bg-cyan-700 active:scale-100">
                                        Learn More
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );

                    })}

                </div>
            </motion.div>

        </section>
    )

}
