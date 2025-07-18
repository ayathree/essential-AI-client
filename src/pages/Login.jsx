import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'

import { FiEye } from "react-icons/fi";
import { HiOutlineEyeOff } from "react-icons/hi";
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const Login = () => {
   const[show,setShow]=useState(false)
    const[email,setEmail]=useState("")
       const[password,setPassword]=useState("")
       const {serverUrl}=useContext(AuthContext)
       const {getCurrentUser}=useContext(AuthContext)
       const navigate = useNavigate()

       const handleLogIn =async(e)=>{
        e.preventDefault()
        try{
            const result = await axios.post(serverUrl + '/login',{email,password},{withCredentials:true})
            console.log(result.data)
            e.target.reset()
            getCurrentUser()
            navigate('/')

        }
        catch(error){

            console.log(error);
        }
       }
       return (
           <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#ffff] to-[#ffff] text-black flex flex-col items-center justify-start">
               <div className="w-[100%] flex items-center justify-start cursor-pointer" onClick={()=>navigate('/')}>
                   <img className='w-[300px]' src={logo} alt="" />  
               </div>
               <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
                   <span className='text-[25px] font-semibold'>Login Page</span>
                   <span className='text-[16px]'>Welcome to Essential</span>
               </div>
               <div className='max-w-[600px] w-[90%] h-[600px] bg-[#663333] border-[#ffff] border-[1px] backdrop:blur-2xl rounded-lg flex items-center justify-center'>
                   <form action="" onSubmit={handleLogIn} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
                       
                       <div className='w-[90%] h-[300px] mt-[10px] flex flex-col items-center justify-center gap-[15px] relative'>
                           <input type="email" className='w-[100%] h-[50px] border-[2px] border-[#EFD8D8] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email} />
                           <input type={show?'text':'password'} className='w-[100%] h-[50px] border-[2px] border-[#EFD8D8] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                           {!show && <FiEye onClick={()=>setShow(prev=>!prev)} className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[57%]  text-white' />}
                           {show && <HiOutlineEyeOff onClick={()=>setShow(prev=>!prev)} className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[57%]  text-white' />}
                           <button className='w-[100%] h-[50px] bg-[#EFD8D8] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>Log In</button>
                           <p className='flex gap-[10px] capitalize text-white'>Have not any account?<Link to={'/signup'}><span className='text-white hover:text-black text-[17px] underline font-semibold cursor-pointer capitalize'>Create new account</span></Link></p>
   
                       </div>
   
                   </form>
   
               </div>
               
           </div>
       );
   };


export default Login;