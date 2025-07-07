import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import google from '../assets/google.jpg'
import { FiEye } from "react-icons/fi";

const Registration = () => {
    const navigate = useNavigate()
    return (
        <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#ffff] to-[#ffff] text-black flex flex-col items-center justify-start">
            <div className="w-[100%] flex items-center justify-start cursor-pointer" onClick={()=>navigate('/')}>
                <img className='w-[300px]' src={logo} alt="" />  
            </div>
            <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
                <span className='text-[25px] font-semibold'>Registration Page</span>
                <span className='text-[16px]'>Welcome to Essential</span>
            </div>
            <div className='max-w-[600px] w-[90%] h-[600px] bg-[#663333] border-[#ffff] border-[1px] backdrop:blur-2xl rounded-lg flex items-center justify-center'>
                <form action="" className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
                    <div className='w-[90%] h-[50px]  bg-[#EFD8D8] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'>
                        <img src={google} alt="" className='w-[30px]' /><span className='font-semibold'>Registration with Google</span>
                    </div>
                    <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px] text-white'>
                        <div className='w-[40%] h-[1px] bg-[#EFD8D8] '></div> OR <div className='w-[40%] h-[1px] bg-[#EFD8D8] '></div>
                    </div>
                    <div className='w-[90%] h-[300px] flex flex-col items-center justify-center gap-[15px] relative'>
                        <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#EFD8D8] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='UserName' required />
                        <input type="email" className='w-[100%] h-[50px] border-[2px] border-[#EFD8D8] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email' required />
                        <input type="password" className='w-[100%] h-[50px] border-[2px] border-[#EFD8D8] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Password' required />
                        <FiEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]  text-white' />
                        <button className='w-[100%] h-[50px] bg-[#EFD8D8] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>Create Account</button>
                        <p className='flex gap-[10px] capitalize text-white'>Already have an account?<Link to={'/login'}><span className='text-white hover:text-black text-[17px] underline font-semibold cursor-pointer'>Login</span></Link></p>

                    </div>

                </form>

            </div>
            
        </div>
    );
};

export default Registration;