

const Title = ({text1,text2}) => {
    return (
        <div className="inline-flex gap-2 items-center text-center mb-3 text-[35px] md:text-[40px]">
            <p className="text-[#663333]">{text1} <span className="text-[#663333]">{text2}</span></p>
        </div>
    );
};

export default Title;