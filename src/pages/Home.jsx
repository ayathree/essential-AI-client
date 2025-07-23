import { useEffect, useState } from "react";
import Background from "../components/Background";
import Hero from "../components/Hero";
import Product from "./Product";



const Home = () => {
    const heroData=[
        {text1:"30% OFF Limited Offer", text2:"Be Natural"},
        {text1:"Discover The Best", text2:"Limited Time Only!"},
        {text1:"Explore Our Product", text2:"Shop Now!"},
        {text1:"Perfect Product for Skin", text2:"Now on Sale!"}
    ]
    const [heroCount,setHeroCount]=useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setHeroCount(prevCount =>(prevCount===3 ? 0: prevCount +1))
        },3000)
        return ()=>clearInterval(interval)
    },[])
    return (
        <div className="overflow-x-hidden relative top-[70px]">
            <div className="lg:w-[100vw] lg:h-[100vh] md:h-[50vh] h-[30vh] ">
           <Background heroCount={heroCount}></Background>
           <Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]}></Hero>
            
            
        </div>
        <Product></Product>
        </div>
    );
};

export default Home;