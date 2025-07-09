import { Route, Routes } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";
import Nav from "../components/Nav";
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";


const Router = () => {
    // const {userData}=useContext(AuthContext)
    return (
        <>
        <Nav></Nav>
        <Routes>
             <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Registration/>}></Route>
        </Routes>
            
        </>
    );
};

export default Router;