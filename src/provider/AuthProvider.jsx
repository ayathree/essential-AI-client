
import axios from "axios";
import { createContext, useEffect, useState} from "react";


export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [userData,setUserData]=useState("")
    const[adminData,setAdminData]=useState("")
    const[products,setProducts]=useState([])
    const[search,setSearch]= useState('')
    const[showSearch,setShowSearch]=useState(false)
    const [cartItem,setCartItem]=useState({})
    const[loading,setLoading]=useState(true)
    const serverUrl = import.meta.env.VITE_API_URL
    const currency="$";
    const delivery_fee=40;

    const getProduct = async()=>{
        try{
            const result = await axios.get(serverUrl + '/products')
            console.log(result.data);
            setProducts(result.data)

        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getProduct()
    },[])

    const getCurrentUser = async()=>{
        try{
            const result = await axios.get(serverUrl + '/getCurrentUser',{withCredentials:true})
            setUserData(result.data)
            console.log(result.data);
        }
        catch(error){
            setUserData(null)
            console.log(error);

        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])

    const getAdmin = async()=>{
        try{
            const result = await axios.get(serverUrl + '/getAdmin',{withCredentials:true})
            setAdminData(result.data)
            console.log(result.data);
        }
        catch(error){
            setAdminData(null)
            console.log(error);

        }
    }

    useEffect(()=>{
        getAdmin()
    },[])

    const addToCart = async (itemId, size)=>{
        if(!size){
            console.log("Select Product Size");
            return;
        }

        let cartData = structuredClone(cartItem);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            } else{
                cartData[itemId][size] =1
            }
        }else{
            cartData[itemId]={};
            cartData[itemId][size] = 1
        }

        setCartItem(cartData)
        console.log(cartData);
       
        if(userData){
            try{
                await axios.post(serverUrl + '/addToCart', {itemId,size}, {withCredentials:true})
                // setLoading(false)

            }catch(error){
                console.log(error);
                // toast.error(error.message)
                // setLoading(false)
                

            }
        }



    }

    const getUserCart=async ()=>{
        try{
            const result =await axios.post(serverUrl+'/cart', {}, {withCredentials:true})
            setCartItem(result.data)
        }catch(error){
            console.log(error);
            alert(error.message)


        }
    }

    useEffect(()=>{
        getUserCart()
    },[])

    const updateQuantity=async(itemId,size,quantity)=>{
        let cartData = structuredClone(cartItem);
        cartData[itemId][size]= quantity
        setCartItem(cartData)
        console.log(cartData);
        if(userData){
            try{
                await axios.patch(serverUrl + '/updateCart', {itemId,size,quantity}, {withCredentials:true})

        }catch(error){
            console.log(error);
            alert(error.message)

        }

        }
        

    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItem){
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item] >0){
                        totalCount += cartItem[items][item]
                    }
                }catch (error){
                   console.log(error);
                }
            }
        }
        return totalCount
    }

    const getCartAmount = async()=>{
        let totalAmount=0;
        for(const items in cartItem){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item]>0){
                        totalAmount += itemInfo.price * cartItem[items][item]
                    }

                }catch(error){
                    console.log(error);

                }
            }
        }
    }

    const allInfo={
        serverUrl,userData,setUserData,getCurrentUser,getAdmin,adminData,setAdminData,products,getProduct,delivery_fee,currency,search,setSearch,showSearch,setShowSearch,cartItem,addToCart,getCartCount,setCartItem,loading,setLoading,updateQuantity,getCartAmount
    }

    return (
       <AuthContext.Provider value={allInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;