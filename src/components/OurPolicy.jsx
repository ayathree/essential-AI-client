import { RiExchangeFundsLine } from "react-icons/ri";
import Title from "./Title";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";


const OurPolicy = () => {
    return (
        <div className="w-[100vw] h-[100vh] md:h-[70vh] flex items-center justify-start flex-col gap-[50px]">
            <div className="h-[8%] w-[100%] text-center mt-[70px] ">
                <Title text1={"OUR"} text2={"POLICY"}></Title>
                <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-[#663333] capitalize">
                    customer-friendly policies - committed to your satisfaction and safety.
                </p>

            </div>
            <div className="w-[100%] md:min-h-[50%] h-[20%] mt-16 flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px]">
                {/* div 1 */}
                <div className="w-[400px] max-w-[90%] h-[60%] md:h-[100%]  flex items-center justify-center flex-col gap-[10px]">
                    <RiExchangeFundsLine className="md:w-[60px]  w-[30px] h-[30px] md:h-[60px]  text-[#663333] text-2xl" />
                    <p className="font-semibold md:text-[25px] text-[19px] text-[#663333] capitalize">easy exchange policy</p>
                    <p className="font-semibold md:text-[18px] text-[12px] text-[#663333] text-center capitalize">Exchange made easy - quick,simple and customer friendly process</p>

                </div>
                {/* div 2 */}
                <div className="w-[400px] max-w-[90%] h-[60%] md:h-[100%]  flex items-center justify-center flex-col gap-[10px]">
                    <TbRosetteDiscountCheckFilled className="md:w-[60px]  w-[30px] h-[30px] md:h-[60px]  text-[#663333] text-2xl" />
                    <p className="font-semibold md:text-[25px] text-[19px] text-[#663333] capitalize">7 days return policy</p>
                    <p className="font-semibold md:text-[18px] text-[12px] text-[#663333] text-center capitalize">Shop with confidence - 7 days easy return guarantee</p>

                </div>
                {/* div 3 */}
                <div className="w-[400px] max-w-[90%] h-[60%] md:h-[100%]  flex items-center justify-center flex-col gap-[10px]">
                    <BiSupport className="md:w-[60px]  w-[30px] h-[30px] md:h-[60px]  text-[#663333] text-2xl" />
                    <p className="font-semibold md:text-[25px] text-[19px] text-[#663333] capitalize">best customer support</p>
                    <p className="font-semibold md:text-[18px] text-[12px] text-[#663333] text-center capitalize">trusted customer support - your satisfaction is our priority.</p>

                </div>

            </div>

            
        </div>
    );
};

export default OurPolicy;