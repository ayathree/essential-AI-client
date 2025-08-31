import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { IoSearchCircle, IoSearchCircleOutline } from 'react-icons/io5';
import { FaCircleUser } from 'react-icons/fa6';
import { MdEmail, MdOutlineShoppingCart } from 'react-icons/md';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { IoMdHome } from 'react-icons/io';
import { BsInboxesFill } from 'react-icons/bs';

const Nav = () => {
    const {userData,setUserData,getCurrentUser,serverUrl,showSearch,setShowSearch,search,setSearch,getCartCount}=useContext(AuthContext)

    const [showProfile,setShowProfile]=useState(false)
    const navigate = useNavigate()

// In your Nav component
const handleLogout = async () => {
  try {
    const result = await axios.get(serverUrl + '/logout', { 
      withCredentials: true 
    });
    console.log(result.data);
    
    // Clear client-side state immediately
    setUserData(null);
    
    // Force clear cookies on client side as well
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    getCurrentUser();
    navigate('/login');
  } catch (error) {
    console.log(error);
    // Even if server call fails, clear client state
    setUserData(null);
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/login');
  }
};
    return (
        <div className="w-[100vw] h-[70px] bg-[#663333] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
            {/* div 1 */}
            <div className="w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]">
                <Link to={'/'}><img className='w-[300px] cursor-pointer' src={logo} alt="" /></Link>
            </div>
            {/* div 2 */}
            <div className='w-[50%] lg:w-[20%] hidden md:flex'>
                <ul className='flex items-center justify-center gap-[19px] text-white'>
                <Link to={'/'}><li className='text-[15px] hover:bg-[#EFD8D8] cursor-pointer hover:text-black  text-white font-bold py-[10px] px-[20px] rounded-2xl'>HOME</li></Link>
                <Link to={'/shop'}><li className='text-[15px] hover:bg-[#EFD8D8] cursor-pointer hover:text-black  text-white font-bold py-[10px] px-[20px] rounded-2xl'>STORE</li></Link>
                <Link to={'/about'}><li className='text-[15px] hover:bg-[#EFD8D8] cursor-pointer hover:text-black text-white font-bold py-[10px] px-[20px] rounded-2xl'>ABOUT</li></Link>
                <Link to={'/contact'}><li className='text-[15px] hover:bg-[#EFD8D8] cursor-pointer hover:text-black  text-white font-bold py-[10px] px-[20px] rounded-2xl'>CONTACT</li></Link>                                                      
                </ul>

            </div>
            {/* div 3 */}
            <div className='w-[30%] flex items-center justify-end gap-[20px]'>
                {!showSearch && <IoSearchCircleOutline onClick={()=>{setShowSearch(prev=>!prev);navigate('/shop')}} className='w-[38px] h-[38px] text-white cursor-pointer'></IoSearchCircleOutline>}
                {showSearch &&
                    <IoSearchCircle onClick={()=>setShowSearch(prev=>!prev)} className='w-[38px] h-[38px] text-white cursor-pointer'></IoSearchCircle>
                }
                {!userData && <FaCircleUser onClick={()=>setShowProfile(prev=>!prev)} className='w-[29px] h-[29px] text-white cursor-pointer'></FaCircleUser>}
                {userData && <div onClick={()=>setShowProfile(prev=>!prev)} className='w-[30px] h-[30px] uppercase font-bold bg-[white] text-black rounded-full cursor-pointer flex items-center justify-center'>{userData?.user.name.slice(0,1)}</div>}
                <MdOutlineShoppingCart className='hidden md:block w-[30px] h-[30px] text-white cursor-pointer' onClick={()=>navigate('/cart')}></MdOutlineShoppingCart>
                <p className='absolute w-[18px] items-center md:flex justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[10px] top-[10px] right-[23px] hidden'>{getCartCount()}</p>

            </div>
            {/* div 4 */}
            { showSearch &&
                <div className='w-[100%] h-[80px] bg-white absolute top-[100%] left-0 right-0 flex items-center justify-center'>
                <input type="text" className='lg:w-[50%] w-[80%] h-[60%] bg-[#663333] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px]' placeholder='Search Here' onChange={(e)=>{setSearch(e.target.value)}} value={search} />

            </div>
            }

            {/* div 5 */}
            {showProfile &&
                <div className='absolute w-[220px] h-[150px] bg-[#663333]  top-[110%] right-[4%] border-[1px] border-[#EFD8D8] rounded-[10px] z-10'>
                    <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-white'>
                       {
                        !userData && <li onClick={()=>{navigate('/login');setShowProfile(false)}} className='w-[100%] uppercase font-semibold hover:bg-white hover:text-[#663333] text-white px-[15px] py-[10px] cursor-pointer'>Login</li>
                       }
                        {
                            userData && <li onClick={()=>{handleLogout();setShowProfile(false)}} className='w-[100%] uppercase font-semibold hover:bg-white hover:text-[#663333] text-white px-[15px] py-[10px] cursor-pointer'>Logout</li>
                        }
                        <li onClick={()=>navigate('/order')} className='w-[100%] uppercase font-semibold hover:bg-white hover:text-[#663333] text-white px-[15px] py-[10px] cursor-pointer'>Orders</li>
                        <li onClick={()=>navigate('/about')} className='w-[100%] uppercase font-semibold hover:bg-white hover:text-[#663333] text-white px-[15px] py-[10px] cursor-pointer'>About</li>
                    </ul>
                </div>
            }
            {/* div 6 */}
            <div className='w-[100vw] h-[90px] text-[12px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#663333] md:hidden'>
                <Link to={'/'}><button className='text-white flex items-center justify-center flex-col gap-[2px]'><IoMdHome className='w-[30px] h-[24px] text-white md:hidden' />Home</button></Link>
                <Link to={'/shop'}><button className='text-white flex items-center justify-center flex-col gap-[2px]'><BsInboxesFill className='w-[30px] h-[24px] text-white md:hidden' />Store</button></Link>
               <Link to={'/contact'}> <button className='text-white flex items-center justify-center flex-col gap-[2px]'><MdEmail className='w-[30px] h-[24px] text-white md:hidden' />Contact</button></Link>
                <Link to={'/cart'}><button className='text-white flex items-center justify-center flex-col gap-[2px]'><MdOutlineShoppingCart className='w-[30px] h-[24px] text-white md:hidden' onClick={()=>navigate('/cart')} />Cart</button>
                <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-black font-semibold rounded-full text-[9px] top-[8px] right-[18px]'>{getCartCount()}</p></Link>
                


            </div>

            
        </div>
    );
};

export default Nav;