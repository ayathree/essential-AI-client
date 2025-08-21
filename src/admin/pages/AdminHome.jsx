import { useContext, useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";


const AdminHome = () => {
    const[totalProducts,setTotalProducts] = useState(0)
    const[totalOrders,setTotalOrders] = useState(0)

    const {serverUrl}=useContext(AuthContext)

    const fetchCounts=async()=>{
        try{
            const products = await axios.get(`${serverUrl}/products`,{},{withCredentials:true})
            setTotalProducts(products.data.length)

            const orders = await axios.get(`${serverUrl}/adminOrders`,{withCredentials:true})
            setTotalOrders(orders.data.length)

        }catch(error){
            console.log(error);

        }
    }
    useEffect(()=>{
     fetchCounts()
    },[])
    return (
        <div className="w-[100vw] h-[100vh] relative">
            <AdminNav></AdminNav>
            <Sidebar></Sidebar>
            <div className="w-[70vw] h-[100vh] absolute left-[25%] flex items-start justify-start flex-col gap-[40px] py-[100px]">
                <h1 className="text-[35px] text-[#663333]">Essential Admin Panel</h1> 
                <div className="flex items-center justify-start gap-[50px] flex-col md:flex-row">
                    <div className="text-white w-[400px] max-w-[90%] h-[200px] bg-[#663333] flex justify-center items-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop:blur-lg md:text-[25px] text-[20px] border-[1px] border-[#969595] capitalize" >total number of products : <span className="px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969595]">{totalProducts}</span>

                    </div>
                     <div className="text-white w-[400px] max-w-[90%] h-[200px] bg-[#663333] flex justify-center items-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop:blur-lg md:text-[25px] text-[20px] border-[1px] border-[#969595] capitalize" >total number of orders : <span className="px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969595]">{totalOrders}</span>

                    </div>
                </div>
                </div>
            
        </div>
    );
};

export default AdminHome;