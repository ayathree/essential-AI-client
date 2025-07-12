import { Route, Routes } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";
import Nav from "../components/Nav";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AdminHome from "../admin/pages/AdminHome";
import AdminLogin from "../admin/pages/AdminLogin";
import Orders from "../admin/pages/Orders";
import List from "../admin/pages/List";
import Add from "../admin/pages/Add";


const Router = () => {
    const {userData, adminData}=useContext(AuthContext)
    return (
        <>
        {userData && <Nav></Nav>}
        <Routes>
             <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Registration/>}></Route>
             {!adminData ? (
  <Route path="/login" element={<Login />} />
) : (<>
                 <Route path='/adminHome' element={<AdminHome/>}></Route>
              <Route path='/adminLogin' element={<AdminLogin/>}></Route>
               <Route path='/order' element={<Orders/>}></Route>
                <Route path='/list' element={<List/>}></Route>
                 <Route path='/add' element={<Add/>}></Route>
             </>)
            }

        </Routes>
            
        </>
    );
};

export default Router;