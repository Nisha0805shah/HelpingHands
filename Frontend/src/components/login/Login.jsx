import "./login.css";
import Logo from "../assets/images/HHLogo4.png";
import { Link,useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import axios from 'axios';
// import { useHistory } from "react-router-dom";
const Login = ({ setLoginUser }) => {

  var key = localStorage.getItem('token')
  
  if(key){
    window.location.href="/"
  }
  
  const history = useNavigate()
  const [user, setUser] = useState({
    name: "",
    password: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,//spread operator 
      [name]: value
    })
  }

  const login = (ev) => {
    ev.preventDefault();
    axios.post("http://localhost:8080/Login/Login", user)
      .then(res => {
        alert(res.data.message)
        window.location.href = '/'
        if(res.data.status==200){
          localStorage.setItem('token',res.data.message)
          
        }
        setLoginUser(res.data.user)
        history.push("/")
      })
  }
  return (
    <div className="loginmain">
      <div className="login">
        <img className="LogoImgLogin" src={Logo} alt="Logo" />
        <div className="loginTitle">Login</div>

        <form  className="loginForm">


          {/* <label>Email</label> */}
          <input className="loginInput" type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" />
          <br />
          {/* <label >Password</label> */}
          <input className="loginInput" type="password" name="password" value={user.password}  onChange={handleChange}placeholder="Enter your Password" />
          <button className="loginButton" onClick={login} >Login</button>
        </form>
        <div className="registerLogin">
          <label>New User? &nbsp;
            <Link to="/register">
              Register Now</Link></label>
        </div>

      </div>
    </div>
  )
}

export default Login