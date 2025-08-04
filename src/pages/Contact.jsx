import NewLetterBox from "../components/NewLetterBox";
import Title from "../components/Title";


const Contact = () => {
    return (
        <div className="w-[100vw] min-h-[100vh] flex items-center justify-center flex-col gap-[50px] pt-[80px]">
            <Title text1={'CONTACT'} text2={'US'}></Title>
            <div className="w-[100%] flex items-center justify-center flex-col lg:flex-row">
                <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
                    <img src="https://i.ibb.co/4nWmD87F/image.png" alt="" className="lg:w-[70%] w-[80%] shadow-md shadow-black rounded-sm" />
                </div>
                <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]">
                    <p className="lg:w-[80%] w-[100%] text-[#663333] font-bold lg:text-[18px] text-[15px]">
                        Our Store
                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[#663333] md:text-[16px] text-[13px] capitalize">
                        <p>1234 random station</p>
                        <p>random city, state, USA</p>
                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[#663333] md:text-[16px] text-[13px] capitalize">
                        <p>tel: +5555555555555</p>
                        <p>email: contact@essential.com</p>
                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[15px] text-[#663333] lg:text-[18px] mt-[10px] font-bold capitalize">career at essential

                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[15px] text-[#663333] lg:text-[18px] mt-[10px] font-bold capitalize">learn more about our terms and job opening</p>
                    <button className="px-[30px] py-[20px] flex items-center justify-center text-[#663333] bg-transparent border active:bg-slate-500 rounded-md">Explore Jobs</button>  

                </div>

            </div>

            <NewLetterBox></NewLetterBox>
            
        </div>
    );
};

export default Contact;