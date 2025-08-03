import { useContext, useEffect, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import Title from "../components/Title";
import { AuthContext } from "../provider/AuthProvider";
import Card from "../components/Card";


const Shop = () => {
    const [showFilter,setShowFilter]=useState(false)
    const {products,search,showSearch}=useContext(AuthContext)
    const[filterProduct,setFilterProduct]=useState([])
    const[category,setCategory]=useState([])
    const [subCategory,setSubCategory]=useState([])
    const[sortType,setSortType]=useState("relevant")

    const toggoleCategory=(e)=>{
        if(category.includes(e.target.value)){
            setCategory(prev => prev.filter(item => item !== e.target.value))

        }else{
            setCategory(prev => [...prev, e.target.value])
        }

    }

    const toggoleSubCategory=(e)=>{
        if(subCategory.includes(e.target.value)){
            setSubCategory(prev => prev.filter(item => item !== e.target.value))

        }else{
            setSubCategory(prev => [...prev, e.target.value])
        }
        
    }

    const applyFilter=()=>{
        let productCopy = products.slice()

        if(showSearch && search){
            productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(category.length > 0 )
        {
            productCopy = productCopy.filter(item=>category.includes(item.category))
        }
        if(subCategory.length > 0 )
        {
            productCopy = productCopy.filter(item=>subCategory.includes(item.subCategory))
        }
        setFilterProduct(productCopy)
    }

    const sortProducts = (e)=>{
        let fbCopy = filterProduct.slice()

        switch(sortType){
            case 'low-high':
            setFilterProduct(fbCopy.sort((a,b)=>(a.price -b.price)))
            break; 
            
            case 'high-low':
            setFilterProduct(fbCopy.sort((a,b)=>(b.price -a.price)))
            break; 
            default:
                applyFilter()
            break;    
        }
    }

    useEffect(()=>{
        sortProducts()
    },[sortType])

    useEffect(()=>{
        setFilterProduct(products)

    },[products])


    useEffect(()=>{
        applyFilter()
    },[category,subCategory,search,showSearch])

    return (
        <div className="w-[99vw] min-h-[100vh] flex items-start flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2] pb-[110px]">
            {/* main div 1 */}
            <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] ${showFilter ?"h-[95vh]":"h-[8vh]"}  p-[20px] border-r-[1px] border-[#663333] text-[#663333] lg:fixed`}>
                <p className="text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer" onClick={()=>setShowFilter(prev=>!prev)}>FILTERS
                    {!showFilter && <FaChevronRight className="text-[18px] md:hidden" />}
                   {showFilter &&  <FaChevronDown className="text-[18px] md:hidden" />}
                </p>
                {/* div 1 */}
                <div className={`border-[2px] border-[#663333] pl-5 py-3 mt-6 rounded-md ${showFilter ? "": "hidden"} md:block`} >
                    <p className="text-[18px] text-[#663333]">CATEGORIES</p>
                    <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col">
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Serum'} className="w-3" onChange={toggoleCategory} /> Serum</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Moisturizer'} className="w-3" onChange={toggoleCategory} /> Moisturizer</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Sunscreen'} className="w-3" onChange={toggoleCategory} /> Sunscreen</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Face Wash'} className="w-3" onChange={toggoleCategory} /> Face Wash</p>

                    </div>
                </div>
                {/* div 2 */}
                 <div className={`border-[2px] border-[#663333] pl-5 py-3 mt-6 rounded-md ${showFilter ? "": "hidden"} md:block`} >
                    <p className="text-[18px] text-[#663333]">SUB-CATEGORIES</p>
                    <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col">
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Brightening'} className="w-3" onChange={toggoleSubCategory} /> Brightening</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Hydrating'} className="w-3" onChange={toggoleSubCategory} /> Hydrating</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Acne treatment'} className="w-3" onChange={toggoleSubCategory} /> Acne treatment</p>
                        <p className="flex items-center justify-center gap-[10px] text-[16px] font-light"><input type="checkbox" value={'Anti-aging'} className="w-3" onChange={toggoleSubCategory} /> Anti-aging</p>

                    </div>
                </div>

            </div>
            {/* main div 2 */}
            <div className="lg:pl-[20%] md:py-[10px]">
                <div className="lg:w-[80vw] md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px]">
                    <Title text1={"ALL"} text2={"PRODUCTS"}></Title>
                    <select name="" id="" className="w-[60%] md:w-[200px] h-[50px] px-[10px] text-[#663333] rounded-lg border-[2px] border-black" onChange={(e)=>setSortType(e.target.value)}>
                        <option value="" className="w-[100%] h-[100%]">Sort By :</option>
                        <option value="relevant" className="w-[100%] h-[100%]">Relevant</option>
                        <option value="low-high" className="w-[100%] h-[100%]">Low To High</option>
                        <option value="high-low" className="w-[100%] h-[100%]">High To Low</option>
                    </select>
                </div>

            {/* main div 3 */}
            <div className="lg:w-[80vw] md:w-[60vw] w-[100vw]  min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]">
                {
                    filterProduct.map((item,index)=>(
                        <Card key={index} id={item._id} name={item.name} price={item.price} image={item.images[0]?.url}></Card>
                    ))
                }
            </div>
            </div>
            
        </div>
    );
};

export default Shop;