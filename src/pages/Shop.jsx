import { useState } from "react";


const Shop = () => {
    const [showFilter,setShowFilter]=useState(false)

    return (
        <div className="w-[100vw] min-h-[100vh] flex items-start flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2]">
            <div className="md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] p-[20px] border-r-[1px] border-[#663333] text-[#663333] lg:fixed">
                <p className="text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer" onClick={()=>setShowFilter(prev=>!prev)}>FILTERS</p>
                {/* div 1 */}
                <div className={`border-[2px] border-[#663333] pl-5 py-3 mt-6 rounded-md ${showFilter ? "": "hidden"} md:block`} >
                    <p className="text-[18px] text-[#663333]">CATEGORIES</p>
                    <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col">
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Serum'} className="w-3" /> Serum</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Moisturizer'} className="w-3" /> Moisturizer</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Sunscreen'} className="w-3" /> Sunscreen</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Face Wash'} className="w-3" /> Face Wash</p>

                    </div>
                </div>
                {/* div 2 */}
                 <div className={`border-[2px] border-[#663333] pl-5 py-3 mt-6 rounded-md ${showFilter ? "": "hidden"} md:block`} >
                    <p className="text-[18px] text-[#663333]">SUB-CATEGORIES</p>
                    <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col">
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Brightening'} className="w-3" /> Brightening</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Hydrating'} className="w-3" /> Hydrating</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Acne treatment'} className="w-3" /> Acne treatment</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Anti-aging'} className="w-3" /> Anti-aging</p>

                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Shop;