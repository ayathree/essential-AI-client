import BestSeller from "../components/BestSeller";
import NewArrival from "../components/NewArrival";



const Product = () => {
    return (
        <div className="w-[100vw] min-h-[100vh] flex items-center justify-start flex-col py-[20px]">
            <div className="w-[100%] min-h-[70px] flex items-center justify-center gap-[10px] flex-col ">
                <NewArrival></NewArrival>
            </div>
            <div className="w-[100%] min-h-[70px] flex items-center justify-center gap-[10px] flex-col ">
                <BestSeller></BestSeller>               
            </div>
            
        </div>
    );
};

export default Product;