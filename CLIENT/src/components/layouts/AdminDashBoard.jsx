import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { FaAlignJustify } from "react-icons/fa";
import { toast } from "react-toastify";

export const AdminDashBoard = () => {

  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" />
  }

 const showAlert=(a)=>{
    if(a===1){
      toast.success("Logged Out Successfully");
    }
  }

  return (
    <>
       <header className="border-2 border-gray-500">
        <div className="navbar bg-gray-50 font-Roboto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <FaAlignJustify className="text-black text-xl" />
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 rounded-box w-52 font-Montserrat">
                <li className="p-2"><NavLink to="/kFqHj/admin-dashboard/admin-contacts">Contacts</NavLink></li>
                <li className="p-2"><NavLink to="/kFqHj/admin-dashboard/admin-courses" reloadDocument>Edit/Delete Courses</NavLink></li>
                <li className="p-2"><NavLink to="/kFqHj/admin-dashboard/admin-add-courses">Add New Courses</NavLink></li>
              </ul>
              
            </div>
          </div>
          <div className="navbar-center">
            <p className="md:text-xl font-extrabold">ADMIN DASHBOARD</p>
          </div>
          <div className="navbar-end">

          <NavLink to="/kFqHj/admin-dashboard/logout"><button className="btn btn-ghost" onClick={()=>showAlert(1)}>
              Logout
            </button></NavLink>
          </div>
        </div>
      </header>
     
    
      <Outlet />
    </>
  );
}
