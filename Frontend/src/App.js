import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/login/Login";
// import {useState} from 'react';
//import TopBar from "./components/topbar/Topbar";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Aboutus from "./components/aboutUs/Aboutus";
import Contactus from "./components/contactus/Contactus";
import Feedback from "./components/feedback/Feedback";
//import Register from "./components/Register/Register";

function App() {
  return (

   <>
     <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/register" element={<Register />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/feedback" element={<Feedback />}/>
        </Routes>
      </BrowserRouter>
    {/* <TopBar /> */}
    {/* <Login /> */}
    {/* <Home /> */}
    {/* < Register /> */}
    </>
   
  );
}

export default App;
