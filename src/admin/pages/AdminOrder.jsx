import { useContext, useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { SiEbox } from "react-icons/si";



const AdminOrder = () => {
    const[orders,setOrders]=useState([])
    const {serverUrl}=useContext(AuthContext)

    const fetchAllOrders=async()=>{
        try{
            const result=await axios.get(serverUrl +'/adminOrders',{withCredentials:true})
            setOrders(result.data.reverse())

        }catch(error){
            console.log(error);

        }
    }

   const statusHandler = async (e, orderId) => {
  try {
    // 1. Only send the status in the request body, not orderId twice
    const result = await axios.put(
      serverUrl + `/adminOrders/${orderId}`, 
      { status: e.target.value }, // Only send status
      { withCredentials: true }
    );
    
    // 2. Check for success response
    if (result.data && result.data.updated) {
      await fetchAllOrders(); // Refresh the orders list
    } else {
      console.log("Update failed:", result.data);
    }

  } catch (error) {
    console.error("Status update error:", error);
    // 3. Optional: Show error message to user
    alert("Failed to update status: " + (error.response?.data?.message || error.message));
  }
};

    useEffect(()=>{
        fetchAllOrders()
    },[])
    console.log(orders);
    return (
        <div className="w-[100vw] min-h-[100vh] ">
            <AdminNav></AdminNav>
            <div className="w-[100%] h-[100%] flex items-center lg:justify-start justify-center">
                <Sidebar></Sidebar>
                <div className="lg:w-[85%] md:w-[70%] h-[100%] lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]">
                    <div className="w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-[#663333]">All Orders List</div>
                    {
                        orders.map((order,index)=>(
                            <div className="w-[90%] h-[45%] bg-[#663333] rounded-xl flex lg:items-center items-start justify-between flex-col lg:flex-row p-[10px] md:px-[20px] gap-[20px]">
                                <SiEbox className="w-[60px] h-[60px] text-[#663333] p-[5px] rounded-lg bg-white" ></SiEbox>
                                <div className="flex items-start justify-center flex-col gap-[5px] text-[16px] text-white">
                                    {
                                        order.items.map((item,index)=>{
                                            if(index===order.items.length-1){
                                                return <p key={index}>{item.name.toUpperCase()} * {item.quantity} <span>{item.size}</span> </p>
                                            }else{
                                                return <p key={index}>{item.name.toUpperCase()} * {item.quantity} <span>{item.size}</span>, </p>

                                            }
                                        })
                                    }

                                <div className="text-[15px] text-green-100">
                                    <p className="">{order.address.firstName+" "+ order.address.lastName}</p>
                                    <p className="">{order.address.street + ", "}</p>
                                    <p className="">{order.address.city+", "+ order.address.state + ", "+order.address.country + ", "+order.address.pinCode }</p>
                                    <p>{order.address.phone}</p>
                                </div>
                                </div>
                            <div className="text-[15px] text-green-100">
                                <p>Items : {order.items.length}</p>
                                <p>Method : {order.paymentMethod}</p>
                                <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                                <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
                                <p className="text-[20px]">$ {order.amount}</p>

                            </div>
                            <select name="" id="" value={order.status} className="px-[5px] py-[10px] bg-slate-300 rounded-lg border-[1px] border-black" onChange={(e)=>statusHandler(e,order._id)}>
                                <option value="">Choose Status</option>
                                 <option value="pending">Pending</option>
                                 <option value="processing">Processing</option>
                                 <option value="shipped">Shipped</option>
                                 <option value="delivered">Delivered</option>
                                 <option value="cancelled">Cancelled</option>
                            </select>
                            </div>
                        ))
                    }

                </div>
               
            </div>
            
        </div>
    );
};

export default AdminOrder;