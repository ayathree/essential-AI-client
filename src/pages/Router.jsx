import { Route, Routes } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";


const Router = () => {
    return (
        <>
        <Routes>
             <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Registration/>}></Route>
        </Routes>
            
        </>
    );
};

export default Router;