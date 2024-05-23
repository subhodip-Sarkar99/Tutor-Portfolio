import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const AdminAddCourses = () => {

    const {authorizationToken}=useAuth();

    const [course,setCourse]=useState({
        title:"",
        content:""
    });

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setCourse({
            ...course,
            [name]:value,
        });
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            //console.log(course);
            const response=await fetch("/api/admin/add-new-course",{
                method:"POST",
                headers:{
                    Authorization:authorizationToken,
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(course)
            });
            
            const res_data=await response.json();

            if(response.ok){
                toast.success("New Course Added");
                setCourse({title:"",content:""});
            }else{
                toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
            }

        } catch (error) {
            console.log("Upload Error");
        }
    }

    return (
        <section className="p-6 text-gray-800 font-Montserrat">
        <form onSubmit={handleSubmit} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-cyan-100">
           
            <div>
                <label htmlFor="name" className="block mb-1 ml-1">Course Name</label>
                <textarea id="name" placeholder="Course Title..." name="title" value={course.title} onChange={handleInput} className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100"></textarea>
            </div>
           
            <div>
                <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                <textarea id="message" rows={12} cols={30} type="text" placeholder="Course details..." name="content" value={course.content} onChange={handleInput} className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100"></textarea>
            </div>
            <div>
                <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-sky-600 focus:ring-sky-600 hover:ring-sky-600 text-gray-50">Finish</button>
            </div>
        </form>
    </section>
    );
};
