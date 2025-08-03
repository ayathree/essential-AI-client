import logo from '../assets/logo.jpg'

const Footer = () => {
    return (
        <div className="w-[100%] lg:h-[46vh] md:h-[56vh] h-[31vh] mb-[77px] md:mb-[0px] mt-16 bg-[#663333] ">
            <div className="w-[100%]  md:h-[30vh] h-[15vh] md:mb-[0px]  flex flex-col md:flex-row items-center justify-center md:px-[50px] px-[5px]">
                {/* div 1 */}
                <div className="md:w-[40%] w-[45%] h-[100%] flex items-start justify-center flex-col gap-[5px] ">
                    <div className="flex  gap-[5px] mt-[16px] md:mt-[40px]">
                        <img src={logo} alt="" className='md:w-[200px] md:h-[80px] w-[150px] h-[50px]' />
                        
                    </div>
                    <p className='text-[15px] text-[white] hidden md:block capitalize'>essential is your all-in-one beauty product online shopping destination, offering top quality essential products, unbeatable deals, and fast delivery-all backed by trusted service designed to make your life easier everyday. </p>
                        <p className='text-[15px] text-white flex md:hidden capitalize'>fast. easy. reliable.</p>
                </div>
                {/* div 2 */}
                <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center hidden md:block'>
                    <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-white font-sans capitalize'>company</p>
                    </div>
                    <ul>
                        <li className='text-[15px] text-white md:block hidden cursor-pointer'>Home</li>
                        <li className='text-[15px] text-white  cursor-pointer'>About Us</li>
                         <li className='text-[15px] text-white md:block hidden cursor-pointer'>Delivery</li>
                        <li className='text-[15px] text-white md:block hidden cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                {/* div 3 */}
                <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center hidden md:block'>
                    <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-white font-sans capitalize'>get in touch</p>
                    </div>
                    <ul>
                        <li className='text-[15px] text-white md:block hidden cursor-pointer'>+88888888888</li>
                        <li className='text-[15px] text-white  cursor-pointer'>contact@essential.com</li>
                         <li className='text-[15px] text-white md:block hidden cursor-pointer'>+3333333333</li>
                        <li className='text-[15px] text-white md:block hidden cursor-pointer'>admin@essential.com</li>
                    </ul>


                </div>

            </div>
            <div className='w-[100%] h-[1px] lg:mt-10 md:mt-20 mt-5 bg-white'></div>
            <div className='w-[100%] h-[5vh] mt-3 flex items-center justify-center text-white'>Copywrite 2025@essential.com-All Rights Reserved</div>
            
        </div>
    );
};

export default Footer;