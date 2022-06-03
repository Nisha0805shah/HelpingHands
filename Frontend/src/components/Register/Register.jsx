import "./register.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/HHLogo4.png";
import React, { useState } from 'react'


import axios from "axios";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,//spread operator 
      [name]: value
    })
  }
  //register function 
  const egister = (e) => {
    e.preventDefault();
    const { name, email, password } = user
    if (name && email && password) {
      axios.post("http://localhost:8080/register/register", user)
        .then(res => {
          if (res?.data?.message) {

            alert(res?.data?.message);
          }
          else {
            alert("User Registered Successfully");
            window.location.href = '/login'
          }
        })
    }
    else {
      alert("invalid input")
    };
  }


  return (
    <>
      <div className="registermain">
        <div className="register">
        <img className="RegisterImgLogin" src={Logo} alt="Logo" />
          <div className="registerTitle">Register</div>
          <form  className="loginForm">

          {/* <label>Name</label> */}
          <input className="registerInput" name="name" type="text" value={user.name} onChange={handleChange} placeholder="Enter your Name" />
          <br/>
          {/* <label>Email</label> */}
          <input className="registerInput" name="email" type="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" />
          <br/>
          {/* <label >Password</label> */}
          <input className="registerInput" name="password" type="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" />
          <br/>
          {/* <label>Confirm Password</label> */}
          <input className="registerInput" type="password" placeholder="Enter your Confirm Password" />
          <br/>
          <Link to="/login">
            <button className="registerButton" onClick={egister} >Register</button>
          </Link>

          </form>

        </div>
      </div>
    </>
  )
}



export default Register