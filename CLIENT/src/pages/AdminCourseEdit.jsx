import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const AdminCourseEdit = () => {

    const {authorizationToken,getCourses}=useAuth();

    const navigate= useNavigate();
    
    const [editedCourse,setEditedCourse]=useState({
        title:"",
        content:""
    });
     const [displayCourse,setDisplayCourse]=useState({
        id:"",
        title:"",
        content:"",
     });
    
    const params=useParams();
    //console.log(params.id);

    const getSingleCourse=async()=>{
        try {
            const response=await fetch(`/api/admin/course/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                    
                }
            });
            //console.log("Res: ",response);
            
            if(response.ok){
                const data=await response.json();//dont miss await
              
                setDisplayCourse(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleInput= (e)=>{
        let name=e.target.name;
        let value=e.target.value;
        
        setEditedCourse({
            ...editedCourse,
            [name]:value
        });
    };
    //console.log(editedCourse);

   
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await fetch(`/api/admin/course/update/${params.id}`,{
                method:"PATCH", 
                headers:{
                    Authorization:authorizationToken,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(editedCourse)
            });

            if(response.ok){
                toast.success("Course Updated Successfully");
                getCourses();
                navigate("/kFqHj/admin-dashboard/admin-courses");
            }

        } catch (error) {
            console.log(error);
        }
    }
    
     useEffect(()=>{
      getSingleCourse();
    },[])

  return (
    <section className="p-6 text-gray-800 font-Montserrat">
        <h1 className="font-bold font-Montserrat text-xl text-center mb-2">Edit Your Course</h1>
        <form onSubmit={handleSubmit} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-cyan-100">
          
          <div>
             <div>
             <label htmlFor="name" className="block mb-1 ml-1">Course Name</label>
             <textarea id="name" name="title" defaultValue={displayCourse.title} onChange={handleInput} className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100">
             
             </textarea>
         </div>
        
         <div>
             <label htmlFor="message" className="block mb-1 ml-1">Message</label>
             <textarea id="message" rows={12} cols={30} name="content" defaultValue={displayCourse.content} onChange={handleInput} className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100">
             
             </textarea>
         </div>
       
          
            <div className="mt-2">
                <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-sky-600 focus:ring-sky-600 hover:ring-sky-600 text-gray-50">Finish</button>
            </div>
            </div>

        </form>
    </section>
  );
}
