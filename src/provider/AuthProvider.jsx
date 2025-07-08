
import axios from "axios";
import { createContext, useEffect, useState} from "react";

export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [userData,setUserData]=useState("")
    const serverUrl = import.meta.env.VITE_API_URL

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

    const allInfo={
        serverUrl,userData,setUserData,getCurrentUser
    }

    return (
       <AuthContext.Provider value={allInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;