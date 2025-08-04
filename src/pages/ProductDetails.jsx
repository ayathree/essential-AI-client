import {  useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import RelatedProducts from "../components/RelatedProducts";


const ProductDetails = () => {
    const {productId}=useParams()
    const {products,currency}=useContext(AuthContext)
    const [productData,setProductData]=useState(false)
    const [image,setImage]=useState('')
    const [image1,setImage1]=useState('')
    const [image2,setImage2]=useState('')
    const [image3,setImage3]=useState('')
    // const [image4,setImage4]=useState('')
    const [size,setSize]=useState('')

    const fetchProductData=async()=>{
        products.map((item)=>{
            if(item._id === productId){
                setProductData(item)
                console.log(productData);
                setImage1(item.images[0]?.url)
                setImage2(item.images[1]?.url)
                setImage3(item.images[2]?.url)
                // setImage4(item.images[3]?.url)
                setImage(item.images[0]?.url)
                return null
            }
        })
    }

    useEffect(()=>{
        fetchProductData()
    },[productId,products])
    return productData? (
        <div>
            {/* product */}
            <div className="w-[99vw] h-[130vh] flex items-center justify-start flex-col lg:flex-row gap-[20px]">
                <div className="w-[100vw] h-[130vh] md:h-[100vh] flex items-center justify-start flex-col lg:flex-row gap-[20px]">
                    {/* image section */}
                    <div className="lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center md:gap-[10px] gap-[30px] flex-col-reverse lg:flex-row">
                        {/* main div 1 */}
                        <div className="lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%] flex items-center justify-center gap-[50px] lg:gap-[20px] lg:flex-col flex-wrap">
                            {/* div 1 */}
                            <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
                                <img src={image1} alt="" className="w-[100%] h-[100%] cursor-pointer rounded-md" onClick={()=>setImage(image1)} />

                            </div>
                            {/* div 2 */}
                             <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
                                <img src={image2} alt="" className="w-[100%] h-[100%] cursor-pointer rounded-md" onClick={()=>setImage(image2)} />

                            </div>
                            {/* div 3 */}
                             <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
                                <img src={image3} alt="" className="w-[100%] h-[100%] cursor-pointer rounded-md" onClick={()=>setImage(image3)} />

                            </div>
                            {/* div 4 */}
                             {/* <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
                                <img src={image4} alt="" className="w-[100%] h-[100%] cursor-pointer rounded-md" />
                            </div> */}
                            
                        
                        </div>
                        {/* main div 2 */}
                        <div className="lg:w-[60%] w-[80%] lg:h-[78%] h-[70%] border-[1px] border-[#80808049] rounded-md overflow-hidden">
                            <img src={image} alt="" className="w-[100%] lg:h-[100%] h-[100%] text-[30px] text-[#663333] text-center rounded-md object-fill" />
                        </div>


                    </div>
                    {/* description section */}
                    <div className="lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px]">
                        <h1 className="text-[40px] font-semibold text-[#663333] uppercase">{productData.name}</h1>
                        <div className="flex items-center gap-1">
                            <FaStar className="text-[20px] fill-[#FFD700]" />
                             <FaStar className="text-[20px] fill-[#FFD700]" />
                              <FaStar className="text-[20px] fill-[#FFD700]" />
                               <FaStar className="text-[20px] fill-[#FFD700]" />
                                <FaStarHalfAlt className="text-[20px] fill-[#FFD700]" />
                                <p className="text-[18px] font-semibold pl-[5px] text-[#663333]">(124)</p>
                        </div>
                        <p className="text-[30px] font-semibold pl-[5px] text-[#663333]">{currency} {productData.price}</p>
                        <p className="w-[80%] md:w-[60%] text-[16px] font-semibold pl-[5px] text-[#663333]">{productData.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur veniam quasi corporis nesciunt explicabo! Excepturi dolore aliquid doloremque consectetur quibusdam, rem magnam alias a animi? Dolorem accusamus dolore et placeat.</p>
                        {/* size div */}
                        <div className="flex flex-col gap-[10px] my-[10px]">
                            <p className="text-[25px] font-semibold pl-[5px] text-[#663333]">Select Size</p>
                            <div className="flex gap-2">
                                {
                                    productData.sizes.map((item,index)=>(
                                        <button key={index} className={`border py-2 px-4 bg-[#663333] rounded-md text-white ${item === size ? 'bg-green-300 text-black':''}`} onClick={()=>setSize(item)}>{item}</button>
                                    ))
                                }
                            </div>
                            {/* add to cart */}
                            
                            <button className="text-[16px] active:bg-slate-500 cursor-pointer bg-[#663333] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#663333] text-white shadow-md shadow-black">Add To Cart</button> 
                        

                        </div>
                        {/* divider */}
                        <div className="w-[90%] h-[1px] bg-[#663333]"></div>
                        {/* para  */}
                        <div className="w-[80%] text-[16px] text-[#663333]">
                            <p className="capitalize">Essential is more than just skincare</p>
                            <p className="capitalize">easy return and exchange policy within 7 days</p>
                            <p className="capitalize">Join us on a journey to love your skin, simply and beautifully.</p>

                        </div>


                    </div>

                </div>
            </div>
            {/* review */}
            <div className="w-[100%] min-h-[70vh] flex items-start justify-start flex-col overflow-x-hidden">
                <div className="flex px-[20px] mt-[90px] lg:ml-[80px] ml-[0px] lg:mt-[0px]">
                    <p className="border px-5 py-3 text-sm text-[#663333] capitalize">description</p>
                    <p className="border px-5 py-3 text-sm  text-[#663333]">(124)</p>

                </div>
                <div className="w-[80%] md:h-[150px] h-[220px] bg-[#663333] border text-[white] text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px]">
                    <p className="w-[95%] h-[90%] flex items-center justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, consequatur dolorum rem veniam tempore voluptatibus. Possimus, tenetur! Iusto temporibus enim obcaecati, aliquid corrupti quos repellendus, ipsam tempore iure quasi ex.</p>
                </div>
                <RelatedProducts category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id}></RelatedProducts>
            </div>
            
        </div>
    ): <div className="opacity-0"></div>;
};

export default ProductDetails;