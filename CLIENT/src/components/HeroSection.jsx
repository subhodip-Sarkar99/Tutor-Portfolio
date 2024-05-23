import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export const HeroSection = () => {
    const [typeEffect] = useTypewriter({
        words: ["Maximizing potential.", "Personal Mentorship", "Experienced Guidance.", "Aspiration realization."],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 90
    });

    return (

        <section>

            <div className="hero min-h-[88vh]">
                <div className="hero-content  flex-col gap-10 xl:flex-row-reverse justify-between p-4 w-[100%] lg:w-[85%]">
                    <motion.div className="box"
                        initial={{
                            scale:0,
                            y:0
                         }}
                        animate={{
                            scale:1,
                            y:[0,150,-150,-150,0]
                        }}
                       
                        transition={{
                            duration:3,
                            ease:"backInOut",
                            times:[0,0.25,0.5,0.85,1]
                        }}
                    >
                        <img src="/images/upto-bcom.png" className="max-w-sm rounded-lg shadow-2xl" width={340} height={400} />
                    </motion.div>

                    <div className="lg:w[100%] lg:h-[90%] p-0 md:p-6 text-gray-800">
                        <h1 className="px-4 text-2xl lg:text-[2.6rem] font-bold font-Montserrat lg:leading-[3rem] leading-8 text-center text-gray-800"> Excel Beyond Limits: Ignite Your Learning with Personalized Private Tutoring! </h1>
                        <h2 className="font-Roboto text-xl lg:text-[2.8rem] leading-8 text-center lg:leading-[4rem]">Your One Stop Solution for: <br />
                            <span className="text-2xl lg:text-[3rem] lg:leading-[4rem] font-Montserrat text-cyan-700 font-bold">
                                {" "}{typeEffect}
                            </span>
                            <Cursor cursorColor="black" />
                        </h2>

                    </div>

                </div>
            </div>

        </section>

    );
}
