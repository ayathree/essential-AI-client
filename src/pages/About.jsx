import NewLetterBox from "../components/NewLetterBox";
import Title from "../components/Title";


const About = () => {
    return (
        <div className="w-[99vw] md:w-[100vw] min-h-[100vh]  flex items-center justify-center flex-col gap-[50px] pt-[80px]">
            <Title text1={'ABOUT'} text2={'US'}></Title>
            <div className="w-[100%] flex items-center justify-center flex-col lg:flex-row ">
                <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
                    <img src="https://i.ibb.co/237BmLss/image.png" alt="" className="lg:w-[65%] w-[80%] shadow-md shadow-black rounded-lg" />
                </div>
                <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]">
                    <p className="lg:w-[80%] w-[100%] text-[#663333] md:text-[16px] text-[13px]">
                        Welcome to Essential, where skincare meets simplicity and science.We believe that healthy skin should be effortless, effective, and empowering.Our products are designed with clean ingredients and minimal fuss.Each formula is crafted to suit everyday needs without overwhelming your routine.At Essential, we focus on what matters — real results for real people.
                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[#663333] md:text-[16px] text-[13px]">
                        From Vitamin C serums to gentle face washes, each product is thoughtfully made.Our bestsellers like Niacinamide Serum and Tinted Sunscreen speak for themselves.We prioritize quality packaging, safe ingredients, and visible skincare benefits.No complicated steps, just essentials your skin actually needs.Each item is tested for safety, comfort, and compatibility with all skin types.
                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[#663333] md:text-[18px] text-[15px] mt-[10px] font-bold">
                        Our Mission

                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[#663333] md:text-[16px] text-[13px]">
                        Our mission is to make skincare accessible, trustworthy, and affordable.We cut through the clutter of trendy marketing and offer products that truly work.Essential stands for transparency, gentle formulations, and long-term skin health.We avoid harsh additives and focus on dermatologist-recommended ingredients.Whether you're just starting or refining your routine, Essential is your honest guide.
                    </p>

                </div>
            </div>
            {/* div 2 */}
            <div className="w-[100%] flex items-center justify-center flex-col gap-[10px]">
                <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
                <div className="w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]">
                    <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-[white] flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#663333]">
                        <b className="text-[20px] font-semibold text-[white]">Clean, Effective Ingredients</b>
                        <p>
                            We use skin-friendly, dermatologist-backed ingredients that deliver real results — no harsh chemicals, no empty promises.
                        </p>

                    </div>
                    <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-[white] flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#663333]">
                        <b className="text-[20px] font-semibold text-[white]">Minimalist Skincare for All</b>
                        <p>
                           Our products are simple, safe, and suitable for every skin type — making skincare easy and stress-free.
                        </p>

                    </div>
                    <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-[white] flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#663333]">
                        <b className="text-[20px] font-semibold text-[white]">Honest Beauty, Affordable Prices</b>
                        <p>
                           We focus on transparency and quality while keeping our products affordable for everyone.
                        </p>

                    </div>
                </div>

            </div>
            {/* div 3 */}
            <NewLetterBox></NewLetterBox>
            
        </div>
    );
};

export default About;