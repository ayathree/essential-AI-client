import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Card = ({name, image, id, price}) => {
    const {currency}=useContext(AuthContext)
    return (
        <div className="w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[#00000049]">
            <img src={image} alt="" className="w-[100%] h-[80%] rounded-sm object-cover " />
            
            <div className="text-[#663333] font-bold text-[18px] py-[10px]">{name}</div>
            <div className="text-[#663333] font-bold text-[14px]">{currency}{price}</div>
            
        </div>
    );
};

export default Card;