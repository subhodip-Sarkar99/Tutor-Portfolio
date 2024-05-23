import { useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {

  const {userContacts,getUserContacts,authorizationToken}=useAuth();

  const deleteContact=async (id)=>{
    //console.log(id);
    try {
      const response=await fetch(`/api/admin/users-contacted/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:authorizationToken,
        }
      });

      toast.success("Contact Deleted");
      if (response.ok) {
        getUserContacts();
      }

    } catch (error) {
      console.log("Delete Error");
    }
  }
  
  useEffect(()=>{
    getUserContacts();
  },[]);



  return (
    <>
    <section className="bg-gray-50 h-screen mt-4 font-Montserrat mb-[3rem]"> 
    <h1 className="text-center p-2 font-bold text-cyan-900">People who Contacted You</h1>

    {userContacts.map((contact)=>{

      return(
        <div className="flow-root rounded-lg border border-gray-500 py-3 shadow-sm m-2" key={contact._id}>
  
        <dl className="-my-3 divide-y divide-gray-400 text-sm" >
         
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
        <dt className="font-bold text-xl text-gray-900">Name</dt>
        <dd className="text-gray-700 sm:col-span-2 font-semibold">{contact.name}</dd>
      </div>
  
      <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
        <dt className="font-bold text-xl text-gray-900">Email</dt>
        <dd className="text-gray-700 sm:col-span-2 font-semibold">{contact.email} <span>(Date: {contact.createdAt.substr(0,10)})</span></dd>
      </div>
  
      <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
        <dt className="font-bold text-xl text-gray-900">Contact #</dt>
        <dd className="text-gray-700 sm:col-span-2 font-semibold">{contact.phone}</dd>
      </div>
  
      <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
        <dt className="font-bold text-xl text-gray-900">Message</dt>
        <dd className="text-gray-700 sm:col-span-2 font-semibold">
         {contact.message}
        </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
        <dt className="font-bold text-xl text-gray-900">Action</dt>
        <dd className="text-xl text-gray-100 sm:col-span-2 bg-red-500 p-5 rounded-xl text-center transition duration-200 hover:bg-red-800 hover:text-white active:scale-75"
         role="button"
         onClick={()=>deleteContact(contact._id)}
         >
          Delete
          </dd>
      </div>

    </dl>

  </div>
      );
    })}
<h2 className="font-bold font-Montserrat text-center mb-12">*** END ***</h2>
</section>
</>
  );
}
