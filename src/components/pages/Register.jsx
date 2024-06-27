import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import EcomContext from "../../context/EcomContext";
function Register() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const {showAndHide} = useContext(EcomContext)
  const redirect = useNavigate();
  const registerHandler = async (e)=>{
    e.preventDefault();
    try {
      const res = await fetch("https://technotronix-backend.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          password,
          confirmPassword
        }),
        
      })
      const data = await res.json();
      if (data === "exists") {
        showAndHide("error", "User Already exists")
      }
      else if (data === "invalid password"){
        showAndHide("error", "Password must contain at least 8 characters and must contain one number and one letter")
      }else if (data === "no match"){
        showAndHide("error", "Password do not match")
      }
      else {
        redirect("/login")
        showAndHide("success", "Registration Successful!!!")
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div className="w-[50%] mx-auto my-[5%]">
      <h1 className=" text-center mb-5  font-bold text-2xl">Register Here</h1>
      <form action="" onSubmit={registerHandler}>
        <div className=" gap-3 mb-3">
          <label className="font-bold" htmlFor="firstName">
            First Name <input type="text" className="outline outline-1 "onChange={(e)=> setFirstName(e.target.value)} />
          </label>
        </div>
        <div className=" gap-3 mb-3">
          <label className="font-bold" htmlFor="lastName">
            Last Name <input type="text" className="outline outline-1 "onChange={(e)=> setLastName(e.target.value)} />
          </label>
        </div>
        <div className=" gap-3 mb-3">
          <label className="font-bold" htmlFor="lastName">
            Email
            <input type="email" className="outline outline-1 " onChange={(e)=> setEmail(e.target.value)} />
          </label>
        </div>
        <div className=" gap-3 mb-3">
          <label className="font-bold" htmlFor="phoneNumber">
            Phone Number <input type="text" className="outline outline-1 " onChange={(e)=> setPhone(e.target.value)} />
          </label>
        </div>
        <div className=" gap-3 mb-3">
          <label className="font-bold" htmlFor="password">
            Password <input type="password" className="outline outline-1 " onChange={(e)=> setPassword(e.target.value)} />
          </label>
        </div>
        <div className=" gap-3 mb-3">
          <label className="font-bold" htmlFor="confirmPassword">
            Confirm Password
            <input type="password" className="outline outline-1 " onChange={(e)=> setConfirmPassword(e.target.value)} />
          </label>
        </div>
        <div>
          <button className="bg-black text-white p-[10px] rounded-md hover:bg-orange-500">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
