import "./login.css";
import Logo from "../assets/images/HHLogo4.png";
import {Link} from "react-router-dom";
export default function Login() {
  return (
    <div className="loginmain">
    <div className="login">
    <img className="LogoImgLogin" src={Logo} alt="Logo" />
        <div className="loginTitle">Login</div>
       
       <form action="" className="loginForm">
      
         
            {/* <label>Email</label> */}
            <input className="loginInput" type="email" placeholder="Enter your Email"/>
            <br />
            {/* <label >Password</label> */}
            <input className="loginInput" type="password" placeholder="Enter your Password"/>
            <button className="loginButton">Login</button>
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
