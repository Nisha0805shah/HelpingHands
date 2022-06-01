import "./register.css";
import {Link} from "react-router-dom";

export default function Register() {
  return (
    <div className="login">
        <span className="loginTitle">Register</span>
       <form action="/register" method="POST" className="loginForm">

       <label>Name</label>
            <input className="loginInput" name="name" type="text" placeholder="Enter your Name"/>
         
            <label>Email</label>
            <input className="loginInput" name="email" type="email" placeholder="Enter your Email"/>

            <label >Password</label>
            <input className="loginInput" name="password" type="password" placeholder="Enter your Password"/>

          <label>Confirm Password</label>
            <input className="loginInput" type="password" placeholder="Enter your Confirm Password"/>

            <Link to="/login"><button className="loginButton" >Register</button></Link>
      
      </form>
     
    </div>
  )
}
