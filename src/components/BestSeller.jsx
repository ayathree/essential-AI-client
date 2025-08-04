import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { AuthContext } from "../provider/AuthProvider";
import Card from "./Card";


const BestSeller = () => {
    const {products}=useContext(AuthContext)
    const[bestSeller,setBestSeller]=useState([])
    useEffect(()=>{
        const filterProduct = products.filter((item)=>item.bestseller)
        setBestSeller(filterProduct.slice(0,4))
    },[])
    return (
        <div>
            <div className="h-[8%] w-[100%] text-center mt-[50px]">
                <Title text1={"BEST"} text2={"SELLER"}></Title>
                    <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-[#663333] capitalize">tried,tested,loved - discover our all-time best sellers</p>
            </div>
            <div className="w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]">
                {
                    bestSeller.map((item,index)=>(
                        <Card key={index} name={item.name} id={item._id} price={item.price} image={item.images[0]?.url}></Card>
                    ))

                }

            </div>
            
        </div>
    );
};

export default BestSeller;