import { createContext,useContext, useEffect, useState } from "react";

export const AuthContext= createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider=({children})=>{
    
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [adminsEmail,setAdminsEmail]=useState("");
    const[userContacts,setUserContacts]=useState([]);
    const[course,setCourse]=useState([]);

    const authorizationToken=`Bearer ${token}`;

    const API=import.meta.URI_API;
    //console.log(API);

    const storeTokeninLS=(serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);
    }

    let isLoggedIn=!!token
    //console.log(isLoggedIn);

    //Admin Logout Functionality
    const logoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }

    const userAuth= async()=>{
        try {
            const response=await fetch("/api/admin/admin-data",{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            });
            if(response.ok){
                const data=await response.json();
                //console.log(data.adminData.email);
                setAdminsEmail(data.adminData.email);
                
            }/*else{
                console.log("Error fetching data in catch block");
            }*/
            
        } catch (error) {
            console.log("Error fetching admin data");
        }
    };
    

    const getUserContacts=async()=>{
        try {
            const response=await fetch("/api/admin/users-contacted",{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            });
            //console.log(response);
            if(response.ok){
                const data=await response.json();
                //console.log(data.message);
                setUserContacts(data.message);    
            }

    }catch(error){
        console.log("Cannot fetch contacts");
    }
};

//Getting added courses from backend
const getCourses=async ()=>{
    
    try {
        const response=await fetch("/api/user/courses",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }
        });
        //console.log(response);
        if(response.ok){
            const data=await response.json();
            //console.log(data.message);
            setCourse(data.message);
        }
    } catch (error) {
        console.log("Unable to get courses");
    }
}

    useEffect(()=>{
        userAuth();
        getCourses();
    },[]);
    

    return (<AuthContext.Provider value={{API,storeTokeninLS,isLoggedIn,logoutUser,adminsEmail,getUserContacts,userContacts,authorizationToken,course,getCourses}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth=()=>{
    const authContextValue= useContext(AuthContext);
    //console.log(authContextValue);
    if(!authContextValue){
        throw new Error("useAuth used outside provider");
    }
    return authContextValue;
};