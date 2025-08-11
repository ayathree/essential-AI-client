import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import {  RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from "../components/CartTotal";


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
                                <input type="number" min={1} defaultValue={item.quantity} className="md:max-w-20 max-w-10 md:px-2 md:py-2 py-[5px] px-[10px] text-white text-18px font-semibold bg-[#518080b4] absolute md:top-[40%] top-[46%] left-[75%] md:left-[50%] border-[1px ] rounded-md border-[#9ff9f9]" onChange={(e)=>e.target.value===''||e.target.value ==='0'?null:updateQuantity(item._id,item.size,Number(e.target.value))} />
                                <RiDeleteBin6Line className="text-white w-[25px] h-[25px] absolute top-[50%] md:top-[40%] md:right-[5%] right-1 cursor-pointer " onClick={()=>updateQuantity(item._id,item.size,0)}></RiDeleteBin6Line>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-start items-end my-20">
                <div className="w-full sm:w-[450px]">
                    <CartTotal></CartTotal>
                    <button className="text-[18px] hover:bg-slate-500 cursor-pointer bg-[#663333] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] border-[1px] border-[#80808049]
                    ml-[30px] mt-[20px] uppercase" onClick={()=>{
                        if(cartData.length>0){
                            navigate("/placeHolder")
                        }else{
                            console.log("Your Cart Is Empty");
                        }
                    }}>Proceed to checkout</button>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;