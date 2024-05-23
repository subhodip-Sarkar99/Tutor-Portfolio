/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { feedback } from "../constants/data";
import { motion,useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Testimonials = () => {

  const ref=useRef(null);
  const isInView=useInView(ref);

  useEffect(()=>{
    //console.log(isInView);
  },[isInView]);

  return (

    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Read trusted reviews from my Students
            </h2>
          </div>

          <Link to="contact"
            href="#"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-800 px-5 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-white md:mt-0"
          >
            <span className="font-medium"> Contact Now </span>
            </Link>
          
          
        </div>

        <motion.div className="box"
         initial={{
          x:0,
          scale:0
         }}
         
         whileInView={{
          scale:isInView?0.50:1,
          transition:{duration:0.75}
          
      }}
        >
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 shadow-lg">

            {feedback.map((curUser) => {
              return (
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 transition hover:scale-105" key={curUser.id}>
                  <div>
                    <div className="flex gap-0.5">
                      <img src="/images/5star.png" alt="5 star rated" width={150} height={150} />
                    </div>

                    <div className="mt-4">
                      <p className="font-Roboto text-semibold text-2xl font-bold text-cyan-600 italic sm:text-3xl">{curUser.title}</p>

                      <p className="mt-4 leading-relaxed text-gray-700 font-Montserrat">
                        {curUser.comments}
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 font-Roboto">
                    
                    <ul className="flex flex-row justify-between items-center">
                      <li>&mdash; {curUser.username} </li>
                      <li>| Posted on: {curUser.date}</li>
                    </ul>

                  </footer>
                </blockquote>
              )
            })}


          </div>
        </motion.div>
      </div>

    </section>
  );
}
