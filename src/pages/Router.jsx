import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import Shop from "./Shop";
import Contact from "./Contact";
import Product from "./Product";
import About from "./About";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";


const Router = () => {
    const {userData, adminData}=useContext(AuthContext)
    const location = useLocation()
    return (
        <>
        {userData && <Nav></Nav>}
        <Routes>
              <Route path='/login' element={
                userData ?(<Navigate to={location.state?.from || '/'}></Navigate>) :(<Login/>)
                }></Route>
            <Route path='/signup' element={
              userData ?(<Navigate to={location.state?.from || '/'}></Navigate>) :(<Registration/>)
              }></Route>

             <Route path='/' element={userData ? <Home/> : <Navigate to={'/login'} state={{from:location.pathname}}></Navigate>}></Route>

            <Route path='/shop' element={userData ?<Shop/>: <Navigate to={'/login'} state={{from:location.pathname}}></Navigate>}></Route>

            <Route path='/contact' element={userData?<Contact/>: <Navigate to={'/login'} state={{from:location.pathname}}></Navigate>}></Route>

            <Route path='/product' element={userData?<Product/>: <Navigate to={'/login'} state={{from:location.pathname}}></Navigate>}></Route>

            <Route path='/about' element={userData?<About/>: <Navigate to={'/login'} state={{from:location.pathname}}></Navigate>}></Route>
             <Route path='/productDetail/:productId' element={userData?<ProductDetails/>: <Navigate to={'/login'} state={{from:location.pathname}}></Navigate>}></Route>

             <Route path='/cart' element={userData?<Cart/>: <Navigate to={'/'} state={{from:location.pathname}}></Navigate>}></Route>


             {!adminData ? (
  <Route path='/adminLogin' element={<AdminLogin/>} />
) : (<>
                 <Route path='/adminHome' element={<AdminHome/>}></Route>
              
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