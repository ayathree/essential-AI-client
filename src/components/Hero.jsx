import { FaCircle } from "react-icons/fa6";


const Hero = ({heroData,heroCount,setHeroCount}) => {
    return (
        <div className="w-[100vw] h-[100vh] relative ">
            <div className="absolute  text-[#663333] text-[15px] md:text-[30px] lg:text-[55px] md:left-[3%] md:top-[90px] lg:top-[130px] left-[3%] top-[10px]">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
                
            </div>
            <div className="absolute md:top-[200px] lg:top-[500px] top-[100px] left-[10%] flex  items-center justify-center gap-[10px]">
                <FaCircle className={`w-[14px] ${heroCount=== 0 ?"fill-[#663333]":"fill-white rounded-full border-black border-2"}`} onClick={()=>setHeroCount(0)} />
                <FaCircle className={`w-[14px] ${heroCount=== 1 ?"fill-[#663333]":"fill-white rounded-full border-black border-2"}`} onClick={()=>setHeroCount(1)}/>
                <FaCircle className={`w-[14px] ${heroCount=== 2 ?"fill-[#663333]":"fill-white rounded-full border-black border-2"}`} onClick={()=>setHeroCount(2)}/>
                <FaCircle className={`w-[14px] ${heroCount=== 3 ?"fill-[#663333]":"fill-white rounded-full border-black border-2"}`} onClick={()=>setHeroCount(3)}/>

            </div>
            
        </div>
    );
};

export default Hero;