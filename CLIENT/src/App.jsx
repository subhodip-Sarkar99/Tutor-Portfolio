import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { AboutMe } from "./pages/AboutMe";
import { Courses } from "./pages/Courses";
import { ErrorPage } from "./pages/ErrorPage";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashBoard } from "./components/layouts/AdminDashBoard";
import { Logout } from "./pages/Logout";
import { Navbar } from "./components/Navbar"
import { AdminCourses } from "./pages/AdminCourses";
import { AdminContacts } from "./pages/AdminContacts";
import { AdminAddCourses } from "./pages/AdminAddCourses";
import { AdminCourseEdit } from "./pages/AdminCourseEdit";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/kFqHj" element={<AdminLogin />} />
          <Route path ="/kFqHj/admin-dashboard" element={<AdminDashBoard />}>
            <Route path="admin-contacts" element={<AdminContacts/>} />
            <Route path="admin-courses" element={<AdminCourses />} />
            <Route path="admin-add-courses" element={<AdminAddCourses/>} />
            <Route path="admin-courses/course/:id/edit" element={<AdminCourseEdit />} />
            <Route path="logout" element={<Logout />} />  
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>

  )
}

export default App