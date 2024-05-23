/* eslint-disable react/no-unescaped-entities */
import {toast} from "react-toastify";
import { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {

	const [admin,setAdmin]=useState({
		email:"",
		password:""
	});

	const {storeTokeninLS}=useAuth();

	const navigate=useNavigate();

	const handleInput=(e)=>{
		let name=e.target.name;
		let value=e.target.value;

		setAdmin({
			...admin,
			[name]:value,
		});
	}

	const handleSubmit=async(e)=>{
		e.preventDefault();
		try {
			const response=await fetch("/api/admin/login",{
				method:"POST",
				headers:{
					"Content-Type":"application/json",
				},
				body:JSON.stringify(admin)
			});
			//console.log(response);
			const res_data=await response.json();
			//console.log(res_data);
			if(response.ok){
				storeTokeninLS(res_data.token);

				toast.success("Login Successful");
				setAdmin({email:"",password:""});

				navigate("/kFqHj/admin-dashboard/admin-contacts");

			}else{
				toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
			}
			
		} catch (error) {
			console.log("Login error:",error);
		}
	}

  return (
    <section className="h-screen bg-gray-50 flex items-center justify-center font-Roboto">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-200 text-gray-800 w-[80%]">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm text-gray-600">Sign in to access your account</p>
	</div>
	<form onSubmit={handleSubmit} className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" value={admin.email} onChange={handleInput} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password" id="password" value={admin.password} onChange={handleInput} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-sky-600 text-gray-50">Sign in</button>
			</div>
			
		</div>
	</form>
</div>
    </section>
  )
}
