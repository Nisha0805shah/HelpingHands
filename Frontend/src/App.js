import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/login/Login";
//import TopBar from "./components/topbar/Topbar";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
//import Register from "./components/Register/Register";

function App() {
  return (

   <>
     <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
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
