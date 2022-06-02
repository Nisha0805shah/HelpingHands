import "./register.css";
import {Link} from "react-router-dom";
import React , {useState} from 'react'


import axios from "axios";
const Register = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
//register function 
   const egister = ()=>{
     e.preventDefault();
   const {name,email,password} = user
   if (name && email && password){
    axios.post("http://localhost:8080/register/register",user )
    .then(res=>{
      if(res?.data?.message){

        alert(res?.data?.message);
      }
      else{
        alert("User Registered Successfully");
        window.location.href='/login'
      }
   })
  }
   else{
       alert("invalid input")
   };
  }


  return (
    <>
    <div className="login">
        <span className="loginTitle">Register</span>
       {/* <form action="#" method="POST" className="loginForm"> */}

       <label>Name</label>
            <input className="loginInput" name="name" type="text"  value={user.name} onChange={handleChange} placeholder="Enter your Name"/>
         
            <label>Email</label>
            <input className="loginInput" name="email" type="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"/>

            <label >Password</label>
            <input className="loginInput" name="password" type="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"/>

          <label>Confirm Password</label>
            <input className="loginInput" type="password" placeholder="Enter your Confirm Password"/>

            <Link to="/login">
              <button className="loginButton" onClick={egister} >Register</button>
              </Link>
      
      {/* </form> */}
     
    </div>
    </>
  )
  }



export default Register