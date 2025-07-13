import { RiUploadCloudFill } from "react-icons/ri";
import AdminNav from "../components/AdminNav";
import Sidebar from "../components/Sidebar";
import { useState } from "react";


const Add = () => {
    const[image1,setImage1]=useState(false)
    const[image2,setImage2]=useState(false)
    const[image3,setImage3]=useState(false)
    const[image4,setImage4]=useState(false)
    return (
        <div className="w-[100vw] min-h-[100vh] text-[#663333] overflow-x-hidden relative">
            <AdminNav></AdminNav>
            <Sidebar></Sidebar>

            <div className="w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden absolute right-0">
                <form action="" className="w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px]">
                    <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] text-[#663333]">
                        Add Product
                    </div>
                    {/* div 1 */}
                    <div className="w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px] gap-[10px]">
                        <p className="text-[20px] md:text-[25px] font-semibold">Upload Images</p>
                        <div className="w-[100%] h-[100%] flex items-center justify-start">
                            <label htmlFor="image1" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#663333]">
                           {!image1 ? (
                            <div className="w-[80%] h-[80%] rounded-lg shadow-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                              <RiUploadCloudFill className="text-gray-400 w-12 h-12" />
                            </div>
                          ) : (
                            <img 
                              src={URL.createObjectURL(image1)} 
                              alt="Preview" 
                              className="w-[80%] h-[80%] rounded-lg shadow-2xl border-2 hover:border-[#663333] object-cover" 
                            />
                          )}
                          <input type="file" id="image1" hidden onChange={(e)=>setImage1(e.target.files[0])} />

                            </label>
                             <label htmlFor="image2" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#663333]">
                           {!image2 ? (
                            <div className="w-[80%] h-[80%] rounded-lg shadow-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                              <RiUploadCloudFill className="text-gray-400 w-12 h-12" />
                            </div>
                          ) : (
                            <img 
                              src={URL.createObjectURL(image2)} 
                              alt="Preview" 
                              className="w-[80%] h-[80%] rounded-lg shadow-2xl border-2 hover:border-[#663333] object-cover" 
                            />
                          )}
                          <input type="file" id="image2" hidden onChange={(e)=>setImage2(e.target.files[0])} />

                            </label>
                             <label htmlFor="image3" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#663333]">
                           {!image3 ? (
                            <div className="w-[80%] h-[80%] rounded-lg shadow-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                              <RiUploadCloudFill className="text-gray-400 w-12 h-12" />
                            </div>
                          ) : (
                            <img 
                              src={URL.createObjectURL(image3)} 
                              alt="Preview" 
                              className="w-[80%] h-[80%] rounded-lg shadow-2xl border-2 hover:border-[#663333] object-cover" 
                            />
                          )}
                          <input type="file" id="image3" hidden onChange={(e)=>setImage3(e.target.files[0])} />

                            </label>
                             <label htmlFor="image4" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#663333]">
                           {!image4 ? (
                            <div className="w-[80%] h-[80%] rounded-lg shadow-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                              <RiUploadCloudFill className="text-gray-400 w-12 h-12" />
                            </div>
                          ) : (
                            <img 
                              src={URL.createObjectURL(image4)} 
                              alt="Preview" 
                              className="w-[80%] h-[80%] rounded-lg shadow-2xl border-2 hover:border-[#663333] object-cover" 
                            />
                          )}
                          <input type="file" id="image4" hidden onChange={(e)=>setImage4(e.target.files[0])} />

                            </label>

                        </div>
                    </div>
                    {/* div 2 */}
                    <div className="w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px]">
                        <p className="text-[20px] md:text-[25px] font-semibold">Product Name</p>
                        <input type="text" placeholder="Type Here" className="w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#663333] border-[2px] cursor-pointer px-[20px] text-[18px] placeholder:text-[#663333]"/>

                    </div>
                    {/* div 3 */}
                     <div className="w-[80%]  flex items-start justify-center flex-col gap-[10px]">
                        <p className="text-[20px] md:text-[25px] font-semibold">Product Description</p>
                        <textarea type="text" placeholder="Type Here" className="w-[600px] max-w-[98%] h-[100px] rounded-lg hover:border-[#663333] border-[2px] cursor-pointer px-[20px] text-[18px] placeholder:text-[#663333] py-[10px]"/>

                    </div>
                    {/* div 4 */}
                    <div className="w-[80%]  flex items-start justify-center flex-col gap-[10px]">
                      
                        <p className="text-[20px] md:text-[25px] font-semibold w-[100%]">Product Category</p>
                        <select name="" id="" className="w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#663333] border-[2px]">
                          <option value=""></option>
                          <option value="Serum">Serum</option>
                          <option value="Sunscreen">Sunscreen</option>
                          <option value="Face Wash">FaceWash</option>
                          <option value="Moisturizer">Moisturizer</option>
                        </select>

                     
                

                      

                    </div>
                    {/* div 5 */}
                    <div className="w-[80%]  flex items-start justify-center flex-col gap-[10px]">
                       <p className="text-[20px] md:text-[25px] font-semibold w-[100%]">Sub Category</p>
                        <select name="" id="" className="w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#663333] border-[2px]">
                          <option value=""></option>
                          <option value="Hydrating">Hydrating</option>
                          <option value="Anti-aging">Anti-aging</option>
                          <option value="Brightening">Brightening</option>
                          <option value="Acne treatment">Acne treatment</option>
                        </select>
                    </div>
                    {/* div 6 */}
                    <div className="w-[80%]  h-[100px]  flex items-start justify-center flex-col gap-[10px]">
                        <p className="text-[20px] md:text-[25px] font-semibold">Price</p>
                        <input type="number" placeholder="Type Here" className="w-[600px] max-w-[98%] h-[100px] rounded-lg hover:border-[#663333] border-[2px] cursor-pointer px-[20px] text-[18px] placeholder:text-[#663333]"/>

                    </div>



                </form>

            </div>
            
        </div>
    );
};

export default Add;