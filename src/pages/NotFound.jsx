import { useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="w-[100vw] h-[100vh] md:text-[70px] text-[30px] flex items-center justify-center text-[#663333] flex-col gap-[20px]">
            404 Page Not Found
            <button className="bg-[#663333] px-[20px] py-[10px] rounded-xl text-[18px] text-white cursor-pointer" onClick={()=>navigate('/')}>Login</button>
            
        </div>
    );
};

export default NotFound;