import { RiUploadCloudFill } from "react-icons/ri";
import AdminNav from "../components/AdminNav";
import Sidebar from "../components/Sidebar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";


const Add = () => {
    const[image1,setImage1]=useState(false)
    const[image2,setImage2]=useState(false)
    const[image3,setImage3]=useState(false)
    const[image4,setImage4]=useState(false)
    const[name,setName]=useState("")
    const[description,setDescription]=useState("")
    const[category,setCategory]=useState("Serum")
    const[price,setPrice]=useState("")
    const[subCategory,setSubCategory]=useState("Hydrating")
    const[bestseller,setBestseller]=useState(false)
    const[sizes,setSizes]=useState([])
    const {serverUrl}=useContext(AuthContext)

    const[loading,setLoading]=useState(false)

    const handleAddProduct = async (e)=>{
      setLoading(true)
      e.preventDefault()
      try{
        const formData = new FormData();
        formData.append("name",name);
        formData.append("description",description);
        formData.append("price",price);
        formData.append("category",category);
        formData.append("subCategory",subCategory);
        formData.append("bestseller",bestseller);
        formData.append("sizes",JSON.stringify(sizes));
        [image1, image2, image3, image4].forEach((images, index) => {
      if (images) {
        formData.append(`images`, images); // Note: same field name for all
      }
    });
   console.log("Text fields:", {
  name, description, price, category, subCategory, bestseller, sizes
});
console.log("Images:", {
  image1: image1?.name,
  image2: image2?.name,
  image3: image3?.name,
  image4: image4?.name
});
    const result = await axios.post(serverUrl + "/products" , formData, {withCredentials:true})
    console.log(result);
    toast.success("Add Product Successfully")
    setLoading(false)

    if(result.data){
      setName("")
      setDescription("")
      setImage1(false)
      setImage2(false)
      setImage3(false)
      setImage4(false)
      setPrice("")
      setBestseller(false)
      setCategory("Serum")
      setSubCategory("Hydrating")
    }

      }catch(error){
        console.error('Error:', error);
        setLoading(false)
        toast.error("Add Product Failed")

      }

    }
    return (
        <div className="w-[100vw] min-h-[100vh] text-[#663333] overflow-x-hidden relative">
            <AdminNav></AdminNav>
            <Sidebar></Sidebar>

            <div className="w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden absolute right-0 bottom-[5%]">
                <form action="" onSubmit={handleAddProduct} className="w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px]">
                    <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] text-[#663333]">
                        Add Product
                    </div>
                    {/* div 1 image */}
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
                          <input type="file" id="image1" hidden onChange={(e)=>setImage1(e.target.files[0])} required/>

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
                          <input type="file" id="image2" hidden onChange={(e)=>setImage2(e.target.files[0])} required />

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
                          <input type="file" id="image3" hidden onChange={(e)=>setImage3(e.target.files[0])} required />

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
                          <input type="file" id="image4" hidden onChange={(e)=>setImage4(e.target.files[0])} required />

                            </label>

                        </div>
                    </div>
                    {/* div 2 name */}
                    <div className="w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px]">
                        <p className="text-[20px] md:text-[25px] font-semibold">Product Name</p>
                        <input type="text" placeholder="Type Here" className="w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#663333] border-[2px] cursor-pointer px-[20px] text-[18px] placeholder:text-[#663333]" onChange={(e)=>setName(e.target.value)} value={name} required/>

                    </div>
                    {/* div 3 description*/}
                     <div className="w-[80%]  flex items-start justify-center flex-col gap-[10px]">
                        <p className="text-[20px] md:text-[25px] font-semibold">Product Description</p>
                        <textarea type="text" placeholder="Type Here" className="w-[600px] max-w-[98%] h-[100px] rounded-lg hover:border-[#663333] border-[2px] cursor-pointer px-[20px] text-[18px] placeholder:text-[#663333] py-[10px]" onChange={(e)=>setDescription(e.target.value)} value={description} required/>

                    </div>
                    {/* div 4 category*/}
                    <div className="w-[80%]  flex items-start justify-center flex-col gap-[10px]">
                      
                        <p className="text-[20px] md:text-[25px] font-semibold w-[100%]">Product Category</p>
                        <select name="" id="" className="w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#663333] border-[2px]" onChange={(e)=>setCategory(e.target.value)} required >
                          <option value=""></option>
                          <option value="Serum">Serum</option>
                          <option value="Sunscreen">Sunscreen</option>
                          <option value="Face Wash">FaceWash</option>
                          <option value="Moisturizer">Moisturizer</option>
                        </select>

                     
                

                      

                    </div>
                    {/* div 5 sub category*/}
                    <div className="w-[80%]  flex items-start justify-center flex-col gap-[10px]">
                       <p className="text-[20px] md:text-[25px] font-semibold w-[100%]">Sub Category</p>
                        <select name="" id="" className="w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#663333] border-[2px]" onChange={(e)=>setSubCategory(e.target.value)} required >
                          <option value=""></option>
                          <option value="Hydrating">Hydrating</option>
                          <option value="Anti-aging">Anti-aging</option>
                          <option value="Brightening">Brightening</option>
                          <option value="Acne treatment">Acne treatment</option>
                        </select>
                    </div>
                    {/* div 6 price*/}
                    <div className="w-[80%]  h-[100px]  flex items-start justify-center flex-col gap-[10px]">
                        <p className="text-[20px] md:text-[25px] font-semibold">Price</p>
                        <input type="number" placeholder="Type Here" className="w-[600px] max-w-[98%] h-[100px] rounded-lg hover:border-[#663333] border-[2px] cursor-pointer px-[20px] text-[18px] placeholder:text-[#663333]" onChange={(e)=>setPrice(e.target.value)} value={price} required/>

                    </div>
                    {/* div 7 quantity*/}
                    <div className="w-[80%] h-[220px] md:h-[100px] flex-items-start justify-center flex-col gap-[10px] py-[10px] ">
                      <p className="text-[20px] md:text-[25px] font-semibold mb-3">Product Quantity</p>
                      <div className="flex items-center justify-start gap-[15px] flex-wrap">

                      <div className={`px-[20px] py-[7px] rounded-lg  text-[18px] hover:border-black border-[2px] cursor-pointer ${sizes.includes("trial size")?"bg-green-300 text-black border-black":""}`} onClick={()=>setSizes(prev=>prev.includes("trial size") ? prev.filter(item => item !== "trial size"):[...prev , "trial size"])}>trial size</div>

                        <div className={`px-[20px] py-[7px] rounded-lg  text-[18px] hover:border-black border-[2px] cursor-pointer ${sizes.includes("50 ml")?"bg-green-300 text-black border-black":""}`} onClick={()=>setSizes(prev=>prev.includes("50 ml") ? prev.filter(item => item !== "50 ml"):[...prev , "50 ml"])}>50 ml</div>

                        <div className={`px-[20px] py-[7px] rounded-lg  text-[18px] hover:border-black border-[2px] cursor-pointer ${sizes.includes("100 ml")?"bg-green-300 text-black border-black":""}`} onClick={()=>setSizes(prev=>prev.includes("100 ml") ? prev.filter(item => item !== "100 ml"):[...prev , "100 ml"])}>100 ml</div>

                      </div>

                    </div>
                  {/* div 8 bestseller*/}
                  <div className="w-[80%] flex items-center justify-start gap-[10px] mt-[20px]">
                    <input type="checkbox" id="checkbox" className="w-[25px] h-[25px] cursor-pointer" onChange={()=>setBestseller(prev=>!prev)} />
                    <label htmlFor="checkbox" className="text-[18px] md:text-[22px] font-semibold">
                      Add To BestSeller

                    </label>

                  </div>
                  {/* button*/}
                  <button className="w-full px-[20px] py-[20px] text-white font-semibold rounded-xl bg-[#663333] flex items-center justify-center gap-[10px]  active:bg-slate-700 active:text-white active:border-[2px] border-white">{loading ? <Loading></Loading>:"Add Product"}</button>




                </form>

            </div>
            
        </div>
    );
};

export default Add;