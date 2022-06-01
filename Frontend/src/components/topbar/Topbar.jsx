import "./topbar.css";
import Logo from "../assets/images/HHLogo4.png";
//import Login from "../login/Login";
import {Link} from "react-router-dom";

export default function TopBar() {
 // const user = true;
  return (
    <div className='top'>
      <div className="topLeft">
      {/* <i className="topIcons fa-brands fa-facebook"></i>
      <i className="topIcons fa-brands fa-twitter"></i>
      <i className="topIcons fa-brands fa-pinterest"></i>
      <i className="topIcons fa-brands fa-instagram"></i> */}
      <img className="LogoImg" src={Logo} alt="Logo" />
      </div>
      <div className="topCenter">
          <ul className="topList">
              <li className="topListItems">HOME</li>
              <li className="topListItems">ABOUT</li>
              <li className="topListItems">CONTACT</li>
              <li className="topListItems">FEEDBACK</li>
              <li className="topListItems">LOGOUT</li>
          </ul>
      </div>
      <div className="topRight">
          {/* <img className="topImg" 
          src="https://images.hdqwalls.com/download/hair-in-face-beautiful-blonde-girl-th-1280x2120.jpg" 
          alt="" 
          /> */}
          <ul className="topList">
          <Link to="/login">Login/Register</Link>
          
          
          {/* <li className="topListItems"></li> */}
          </ul>
          {/* <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i> */}
      </div>
    </div>
  )
}
