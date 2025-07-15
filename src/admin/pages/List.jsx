import { useContext, useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";


const List = () => {
    const[list,setList]=useState([])
    const {serverUrl}=useContext(AuthContext)

    const fetchList = async () =>{
        try{
            const result = await axios.get(serverUrl + '/products')
            setList(result.data)
            console.log(result.data);
        }
        catch(error){
            console.log(error);

        }
    }
    useEffect(()=>{
        fetchList()
    },[])

    const removeList = async (id) =>{
        try{
            const result =await axios.delete(`${serverUrl}/products/${id}`,{withCredentials:true})
            if(result.data){
                fetchList()
            }
            else{
                console.log("Failed to remove product");
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className="w-[100vw] min-h-[100vh] text-[#663333]">
            <AdminNav></AdminNav>
            <div className="w-[100%] h-[100%] flex items-center justify-start ">
                <Sidebar></Sidebar>
                <div className="w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]">
                    <div className="w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-[#663333]">
                        All Listed Products

                    </div>
                    {
                        list?.length > 0 ?(
                            list.map((item,index)=>(
                                <div className="w-[90%] md:h-[160px] h-[90px] bg-[#663333] rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px]" key={index}>
                                    <img src={item.images[0].url} alt="" className="w-[30%] md:w-[90px] h-[90%] rounded-lg" />
                                    <div className="w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px]">
                                        <div className="w-[100%] md:text-[20px] text-[15px] text-white">{item.name}</div>
                                        <div className="md:text-[17px] text-[15px] text-white">{item.category}</div>
                                         <div className="md:text-[17px] text-[15px] text-white">$ {item.price}</div>
                                        
                                    </div>
                                    <div className="w-[10%] h-[100%] bg-transparent flex items-center justify-center">
                                        <span className="text-white w-[35px] h-[30%] flex items-center justify-center rounded-md md:hover:bg-white md:hover:text-black cursor-pointer hover:text-gray-500 text-2xl" onClick={()=>removeList(item._id)}>X</span>

                                    </div>
                                    

                                </div>
                            ))
                        ):(
                            <div className="text-[#663333] text-lg">
                                No Product Available

                            </div>
                        )
                    }
                </div>
            </div>
            
        </div>
    );
};

export default List;