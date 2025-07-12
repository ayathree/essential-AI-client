import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const AdminNav = () => {
    const {getAdmin,serverUrl}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleLogout=async()=>{
        try{
            const result = await axios.get(serverUrl + '/logout', {withCredentials:true})
            console.log(result.data);
             getAdmin()
           navigate('/adminLogin')

            
        }
        catch(error){
            console.log(error);

        }
    }
    return (
        <div className="w-[100vw] h-[70px] bg-[#663333] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black">
            <div className="w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px] " onClick={()=>navigate("/adminHome")}>
                <img src={logo} alt="" className="w-[175px] cursor-pointer" />

            </div>
                <button className="text-[15px] text-[#663333] hover:border-[2px] border-white cursor-pointer bg-[#EFD8D8] py-[10px] px-[20px] rounded-2xl font-semibold" onClick={handleLogout}>Logout</button>
            
        </div>
    );
};

export default AdminNav;