import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const{products, currency, cartItem, updateQuantity}=useContext(AuthContext)
    const[cartData,setCartData]=useState([])
    const navigate=useNavigate()
    console.log( cartItem);


    useEffect(()=>{
        const tempData =[];
        for(const items in cartItem){
            for(const item in cartItem[items]){
                if(cartItem[items][item] > 0){
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItem[items][item]

                    })
                }
            }
        }
        setCartData(tempData)
    },[cartItem])

    console.log(cartData);
    return (
        <div className="w-[99vw] min-h-[100vh] p-[20px] overflow-hidden ">
            <div className="h-[8%] w-[100%] text-center mt-[80px]">
                <Title text1={'YOUR'} text2={'CART'}></Title>
            </div>
            <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
                {
                    cartData.map((item,index)=>{
                        const productData = products.find((product)=>product._id === item._id);
                        return(
                            <div key={index} className="w-[100%] h-[10%] ">
                                <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#663333] py-[10px] px-[20px] rounded-2xl relative">
                                    <img className="w-[100px] h-[100px] rounded-md" src={productData.images[0]?.url} alt="" />
                                <div className="flex items-start justify-center flex-col gap-[10px]">
                                    <p className="md:text-[25px] text-[20px] text-white">{productData.name}</p>
                                    <div className="flex items-center gap-[20px]">
                                        <p className="text-[20px] text-white">{currency}{productData.price}</p>
                                        <p className="w-[80px] h-[40px] text-[16px] text-white bg-[#518080b4] rounded-md mt-[5px] flex items-center justify-center border-[1px] border-[#9ff9f9]">{item.size}</p>

                                    </div>

                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default Cart;