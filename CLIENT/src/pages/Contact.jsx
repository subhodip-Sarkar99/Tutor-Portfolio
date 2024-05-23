import { useState } from "react";
import {toast} from "react-toastify";
import { Footer } from "../components/Footer";

/* eslint-disable react/no-unescaped-entities */
export const Contact = () => {

  const [contact,setContact]=useState({
    name:"",
    email:"",
    phone:"",
    message:""
  });

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setContact({
      ...contact,
      [name]:value,
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
     //console.log(contact);
    try {
      const response=await fetch("/api/user/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(contact),

      });
      const data=await response.json();
        //console.log(data);
      if(response.ok){
        setContact({
          name: "",
          email: "",
          phone:"",
          message:""
        });
        //console.log(response);
        //const data=await response.json();
        //console.log(data);
        toast.success("Message sent successfully");
      }else{
      toast.error(data.extraDetails?data.extraDetails:data.message);
      }

    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <>
   
    <section className="bg-gray-50 min-h-screen">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-50 text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2 font-Montserrat">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's Connect!</h2>
            <div className="text-gray-600">Be Smart! and book your tution class today</div>
          </div>
          <img src="/images/contact.png" alt="Contact form" height={400} width={400} />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 font-Roboto text-xl">
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input id="name" name="name" required value={contact.name} type="text" onChange={handleInput} className="w-full p-3 rounded bg-gray-200" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" type="email" name="email" required value={contact.email} onChange={handleInput} className="w-full p-3 rounded bg-gray-200" />
          </div>
          <div>
            <div>
              <label htmlFor="phone" className="text-sm">Phone</label>
              <input id="phone" type="text" name="phone" required value={contact.phone} onChange={handleInput} className="w-full p-3 rounded bg-gray-200" />
            </div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea id="message" name="message" required value={contact.message} onChange={handleInput} rows="3" className="w-full p-3 rounded bg-gray-200"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-sky-600 text-gray-50">Send Message</button>
        </form>
      </div>

      <div id="map mt-4">
        <h2 className="text-4xl font-bold leading-tight lg:text-5xl p-6">Location </h2>
        <iframe className="h-[300px] w-[100%] lg:h-[400px] mb-6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1843.2919931264996!2d88.3445515386448!3d22.482262373246744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270eda74260c5%3A0x4a8373491af01c0a!2sKudghat%2C%20Ashok%20Nagar%2C%20Tollygunge%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715861962903!5m2!1sen!2sin" loading="lazy"></iframe>
      </div>
    </section>
    <Footer />
    </>
  )
}
