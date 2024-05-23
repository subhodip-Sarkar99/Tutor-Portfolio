import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminCourses = () => {

  const { course, authorizationToken, getCourses } = useAuth();

  const deleteCourse = async (id) => {
    //console.log(id);
    try {
      const response = await fetch(`/api/admin/courses/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        }
      });

      toast.success("Course Deleted");
      if (response.ok) {
        getCourses();
      }

    } catch (error) {
      console.log("Course Delete Error");
    }
  }


  return (
    <>
      <section className="bg-gray-50 h-screen mt-4 font-Montserrat mb-[3rem]">
        <h1 className="text-center p-2 font-bold text-cyan-900">Your Courses</h1>
        {course.map((curCourse) => {
          return (
            <div className="flow-root rounded-lg border border-gray-500 py-3 shadow-sm m-2" key={curCourse._id}>

              <dl className="-my-3 divide-y divide-gray-400 text-sm" >

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-xl text-gray-900">Course Name: </dt>
                  <dd className="text-gray-700 sm:col-span-2 font-semibold">{curCourse.title}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-xl text-gray-900">Created on: </dt>
                  <dd className="text-gray-700 sm:col-span-2 font-semibold">{curCourse.createdAt.substr(0, 10)}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-xl text-gray-900">Updated On :</dt>
                  <dd className="text-gray-700 sm:col-span-2 font-semibold">{curCourse.updatedAt.substr(0, 10)}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-xl text-gray-900">Course Details :</dt>
                  <dd className="text-gray-700 sm:col-span-2 font-semibold">
                    {curCourse.content}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-xl text-gray-900">Action: </dt>
                  <div className="flex flex-row justify-around items-center">
                    <dd className="text-xl text-gray-100 sm:col-span-2 bg-red-500 p-5 rounded-xl text-center transition duration-200 hover:bg-red-800 hover:text-white active:scale-75"
                      role="button"
                      onClick={() => deleteCourse(curCourse._id)}
                    >
                      Delete
                    </dd>
                    <Link to={`course/${curCourse._id}/edit`}>
                      <dd className="text-gray-700 text-xl sm:col-span-2 bg-cyan-500 p-5 px-8 rounded-xl text-center transition duration-200 hover:bg-cyan-800 hover:text-white"
                        role="button"
                      >
                        Edit

                      </dd>
                    </Link>
                  </div>
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
