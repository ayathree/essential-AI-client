import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { AuthContext } from "../provider/AuthProvider";
import Card from "./Card";


const NewArrival = () => {
    const{products}=useContext(AuthContext)
    const[latestProducts,setLatestProducts]=useState([])
    
    useEffect(()=>{
        setLatestProducts(products.slice(0,8))
    
    },[])
    
    return (
        <div>
            <div className="h-[8%] w-[100%] text-center md:mt-[50px]">
                <Title text1={"NEW"} text2={"ARRIVAL"}></Title>
                    <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-[#663333] capitalize">Step Into original - new arrival dropping this season!</p>        
            </div>
            <div className="w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]">
                {
                    latestProducts.map((item,index)=>(
                        <Card key={index} name={item.name} image={item.images[0]?.url} id={item._id} price={item.price}></Card>
                    ))

                }

            </div>
            
        </div>
    );
};

export default NewArrival;