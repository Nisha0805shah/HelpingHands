import "./login.css";
import {Link} from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
       <form action="" className="loginForm">
         
            <label>Email</label>
            <input className="loginInput" type="email" placeholder="Enter your Email"/>

            <label >Password</label>
            <input className="loginInput" type="password" placeholder="Enter your Password"/>
            <button className="loginButton">Login</button>
      </form>
     <label>New User? 
     <Link to="/register">
       Register Now</Link></label>
    </div>
  )
}
