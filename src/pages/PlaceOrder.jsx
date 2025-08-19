import { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";


const PlaceOrder = () => {
    const navigate=useNavigate()
    const [method,setMethod]=useState('cod')
    const{cartItem,setCartItem,getCartAmount,delivery_fee,products,serverUrl}=useContext(AuthContext)
    const [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        street:'',
        city:'',
        state:'',
        pinCode:'',
        country:'',
        phone:''
    })

    const onChangeHandler=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler= async (e)=>{
        e.preventDefault()

        try{
            let orderItems=[]
            for(const items in cartItem){
                for(const item in cartItem[items]){
                    if(cartItem[items][item]>0){
                        const itemInfo=structuredClone(products.find(product=>product._id===items))
                        if(itemInfo){
                            itemInfo.size=item
                            itemInfo.quantity=cartItem[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }
            let orderData={
                address:formData,
                items:orderItems,
                amount:getCartAmount() + delivery_fee
            }
            switch(method){
                case 'cod':
                const result=await axios.post(serverUrl + '/placeOrder', orderData, {withCredentials:true})
                console.log(result.data);
                if(result.data){
                    setCartItem({})
                    navigate('/order')
                }else{
                    console.log(result.data.message);
                }
                break;

                default:
                break;
            }

        }catch(error){
            console.log(error);
            // toast.error(error.message)

        }
        
    }
    return (
        <div className="w-[100vw] min-h-[100vh] flex items-center justify-center flex-col md:flex-row gap-[50px] relative ">
            <div className="lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg:mt-[100px] mt-[90px]">
                <form onSubmit={onSubmitHandler} action="" className="lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]">
                    <div className="py-[10px]">
                        <Title text1={'DELIVERY'} text2={'INFORMATION'}></Title>
                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="text" placeholder="First Name" className="w-[48%] h-[50px] rounded-md bg-[#663333] placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]" required onChange={onChangeHandler} name="firstName" value={formData.firstName} />
                        <input type="text" placeholder="Last Name" className="w-[48%] h-[50px] rounded-md bg-[#663333] placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]" required onChange={onChangeHandler} name="lastName" value={formData.lastName} />
                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="email" placeholder="Email address" className="w-[100%] h-[50px] rounded-md bg-[#663333] placeholder:text-white text-[18px] px-[20px]" required onChange={onChangeHandler} name="email" value={formData.email}  />

                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="text" placeholder="Street address" className="w-[100%] h-[50px] rounded-md bg-[#663333] placeholder:text-white text-[18px] px-[20px]" required onChange={onChangeHandler} name="street" value={formData.street} />

                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="text" placeholder="City" className="w-[48%] h-[50px] rounded-md bg-[#663333] placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]" required onChange={onChangeHandler} name="city" value={formData.city} />
                        <input type="text" placeholder="State" className="w-[48%] h-[50px] rounded-md bg-[#663333] placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]" required onChange={onChangeHandler} name="state" value={formData.state} />
                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="number" placeholder="Pin code" className="w-[48%] h-[50px] rounded-md bg-[#663333] placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]" required onChange={onChangeHandler} name="pinCode" value={formData.pinCode} />
                        <input type="text" placeholder="Country" className="w-[48%] h-[50px] rounded-md bg-[#663333] placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]" required onChange={onChangeHandler} name="country" value={formData.country} />
                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="tell" placeholder="Phone" className="w-[100%] h-[50px] rounded-md bg-[#663333] placeholder:text-white text-[18px] px-[20px]" required onChange={onChangeHandler} name="phone" value={formData.phone} />

                    </div>
                    <button type="submit" className="text-[18px] active:bg-slate-500 bg-green-400 cursor-pointer py-[10px] px-[50px] rounded-2xl text-black flex items-center justify-center gap-[20px] absolute lg:right-[15%] lg:bottom-[5%] md:bottom-[3%] bottom-[15%] right-[10%] border-[1px] border-[#80808049] ml-[30px] mt-[20px] uppercase">place order</button>
                </form>
                
            </div>
            <div className="lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]">
                    <div className="lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[0px] flex-col">
                        <CartTotal></CartTotal>
                        <div className="py-[0px] hidden md:block">
                        <Title text1={'PAYMENT'} text2={'METHOD'}></Title>
                    </div>
                    <div className="w-[100%] md:h-[0vh] h-[40vh] lg:h-[100%] flex items-center  justify-center mb-56 md:mb-0 gap-[50px]">
                        <button onClick={()=>setMethod('stripe')} className={`w-[100px] md:h-[30px] h-[50px] rounded-sm cursor-pointer ${method==='stripe'?'border-[1px] border-slate-500 rounded-sm':''}`}>
                            <img src='https://i.ibb.co.com/gMV8Vxw1/image.png' alt="" className="w-[100%] h-[100%] object-fill rounded-sm" />
                        </button>
                        <button onClick={()=>setMethod('cod')} className={`w-[180px] md:h-[30px] h-[50px] text-[14px] px-[20px] bg-[#663333] text-white font-bold  rounded-sm uppercase cursor-pointer ${method==='cod'?'border-[1px] border-slate-500 rounded-sm':''}`}>Cash On Delivery</button>
                    </div>
                    </div>


                </div>
            
        </div>
    );
};

export default PlaceOrder;