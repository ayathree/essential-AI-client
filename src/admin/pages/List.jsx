import { useState } from "react";
import AdminNav from "../components/AdminNav";
import Sidebar from "../components/Sidebar";


const List = () => {
    const[list,setList]=useState([])
    return (
        <div className="w-[100vw] min-h-[100vh] text-[#663333]">
            <AdminNav></AdminNav>
            <div className="w-[100%] h-[100%] flex items-center justify-start ">
                <Sidebar></Sidebar>
                <div className="w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]">
                    <div className="w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-[#663333]">
                        All Listed Products

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default List;