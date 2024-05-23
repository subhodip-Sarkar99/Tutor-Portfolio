/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    
    <section className="bg-gray-50 lg:p-2">
       <motion.div className="box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.4 }}
        >
        <div className="font-Montserrat text-gray-800 font-bold lg:my-10">
        <h1 className="text-xl lg:text-[2.6rem] text-center bg-gray-50">My Academic Journey Till Date</h1>
        </div>
        <div className="bg-timeline bg-no-repeat bg-cover font-Montserrat">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10 font-semibold text-cyan-600">
      <time className="font-mono italic text-xl">2016</time>
      <div className="text-lg font-black text-gray-800">Passed Class 10 in First Division</div>
      Passed Class 10 with an great academic and discipline record.
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10 font-semibold text-cyan-600">
      <time className="font-mono italic text-xl">2018</time>
      <div className="text-lg font-black text-gray-800">Passed Class 12 in First Division</div>
    Passed Class 12 with first division marks.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10 font-semibold text-cyan-600">
      <time className="font-mono italic">2021</time>
      <div className="text-lg font-black text-gray-800">Graduated with Finance Honors in B.Com</div>
      Completed graduation with first class marks.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10 font-semibold text-cyan-600">
      <time className="font-mono italic">2021</time>
      <div className="text-lg font-black text-gray-800">Began my Professional Journey</div>
      Started Coaching from classes 1 to 12 for all subjects.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10 font-semibold text-cyan-600">
      <time className="font-mono italic">2023</time>
      <div className="text-lg font-black text-gray-800">Joined Branie Genie</div>
      Started my career as professional school teacher for Brainie Genie
    </div>
  </li>
</ul>
</div>
</motion.div>
</section>
  )
}

export default Timeline