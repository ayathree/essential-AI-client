import { FaRegListAlt } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { Link } from "react-router-dom";



const Sidebar = () => {
    
    return (
        <div className="w-[18%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-0">
            <div className="flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]">
                <Link to={'/add'}><div className="flex items-center justify-center md:justify-start gap-3 border border-grey-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#663333] hover:text-white">
                    <IoMdAddCircleOutline className="h-[20px] w-[20px]" />
                    <p className="hidden md:block"> Add Items</p>
                   </div></Link>
                <Link to={'/list'}><div className="flex items-center justify-center md:justify-start gap-3 border border-grey-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#663333] hover:text-white">
                    <FaRegListAlt  className="h-[20px] w-[20px]" />
                    <p className="hidden md:block"> List Items</p>
                </div></Link>
                <Link to={'/adminOrder'}><div className="flex items-center justify-center md:justify-start gap-3 border border-grey-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#663333] hover:text-white">
                    <SiTicktick  className="h-[20px] w-[20px]" />
                    <p className="hidden md:block">View Orders</p>
                </div></Link>
                

            </div>
            
        </div>
    );
};

export default Sidebar;