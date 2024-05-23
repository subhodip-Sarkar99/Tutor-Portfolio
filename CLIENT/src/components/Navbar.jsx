import { FaAddressBook, FaAlignJustify,FaBook,FaUser } from "react-icons/fa6";
import { FaHome} from "react-icons/fa";
import { NavLink} from "react-router-dom";



export const Navbar = () => {

  
  return (
    <>
   
      <header className="bg-gray-50">
        <div className="navbar md:flex-row md:justify-around font-Montserrat text-navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} className="btn btn-ghost md:hidden">
                <FaAlignJustify className="text-black text-xl" />
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gray-300 dark:bg-gray-200">
                <li><NavLink to="/"><FaHome />Home</NavLink></li>
                <li><NavLink to="about-me"><FaUser />About Me</NavLink></li>
                <li><NavLink to="courses" reloadDocument><FaBook />Courses</NavLink></li>
                <li><NavLink to="/contact"><FaAddressBook />Contact</NavLink></li>
              </ul>
            </div>
            {/*<NavLink to="/"><img src="/images/Logo.png" alt="BrandLogo" width="100" height="100" /></NavLink>*/}
          </div>
          <div className="navbar-center hidden md:flex justify-end">
            <ul className="menu menu-horizontal px-2 md:text-xl">
              <li><NavLink to="/"><FaHome />Home</NavLink></li>
              <li><NavLink to="/about-me"><FaUser />About Me</NavLink></li>
              <li><NavLink to="courses" reloadDocument><FaBook />Courses</NavLink></li>
              <li><NavLink to="/contact"><FaAddressBook />Contact</NavLink></li>
            </ul>
          </div>

        </div>

      </header>

   
    </>
  );
}
