import Title from "../components/Title";


const About = () => {
    return (
        <div className="w-[100vw] min-h-[100vh] flex items-center justify-center flex-col gap-[50px] pt-[80px]">
            <Title text1={'ABOUT'} text2={'US'}></Title>
            <div className="w-[100%] flex items-center justify-center flex-col lg:flex-row ">
                <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
                    <img src="https://i.ibb.co/237BmLss/image.png" alt="" className="lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm" />
                </div>
            </div>
            
        </div>
    );
};

export default About;