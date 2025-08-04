

const NewLetterBox = () => {
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return (
       <div className="w-[100%] h-[40vh]  flex items-center justify-start gap-[10px] flex-col md:mb-[0px] mb-[100px]">
            <p className="md:text-[30px] text-[20px] text-[#663333] font-semibold px-[20px] capitalize">
                subscribe now and get 20% off

            </p>
            <p className="md:text-[18px] text-[14px] text-center text-[#663333] font-semibold px-[20px] capitalize">Subscribe now and enjoy exclusive savings, special deals, and early access to new collections. </p>
            <form action="" onSubmit={handleSubmit} className="w-[100%] h-[30%] md:h-[50%] flex items-center justify-center md:mt-[20px] gap-[20px] px-[20px]">
                <input type="text" placeholder="Enter Your Email" className="placeholder:text-[#663333] w-[600px] max-w-[60%] h-[40px] px-[20px] rounded-lg shadow-sm shadow-[#663333] border-black border-[1px]" required  />
                <button type="submit" className="text-[15px] md:text-[16px] px-[10px] md:px-[30px] py-[12px] md:py-[10px] hover:bg-slate-500 cursor-pointer bg-[#663333] text-white items-center justify-center gap-[20px] border-[1px] rounded-lg shadow-sm  shadow-[#663333] hover:text-[#663333]">Subscribe </button>
            </form>
            
        </div>
    );
};

export default NewLetterBox;