import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";


const Order = () => {
    const [orderData,setOrderData]=useState([])
    const{currency,serverUrl}=useContext(AuthContext)
    

    const loadOrderData = async () => {
  try {
    // 1. Fixed axios GET request syntax
    const result = await axios.get(serverUrl + '/userOrders', { 
      withCredentials: true 
    });

    // 2. Check if data exists and is an array
    if (result.data && Array.isArray(result.data)) {
      let allOrdersItem = [];
      
      // 3. Use forEach instead of map (since we're not returning anything)
      result.data.forEach((order) => {
        if (order.items && Array.isArray(order.items)) {
          order.items.forEach((item) => {
            // 4. Create a new object to avoid mutating the original
            const enhancedItem = {
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.createdAt,
              orderId: order._id // Add order ID for reference
            };
            allOrdersItem.push(enhancedItem);
          });
        }
      });
      
      // 5. Reverse the array for chronological order
      setOrderData(allOrdersItem.reverse());
    } else {
      console.log("No orders found or invalid data format");
      setOrderData([]); // Set empty array if no data
    }

  } catch (error) {
    console.error("Error loading order data:", error);
    setOrderData([]); // Set empty array on error
  }
}

// 6. FIXED: Call the function properly in useEffect
useEffect(() => {
  loadOrderData(); // Added parentheses to actually call the function
}, []);
    
    console.log(orderData);
    return (
        <div className="w-[99vw] min-h-[100vh] p-[20px] pb-[150px] overflow-hidden ">
            <div className="h-[8%] w-[100%] text-center mt-[80px]">
                <Title text1={'MY'} text2={'ORDER'}></Title>
            </div>
            <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
                {
                    orderData.map((item,index)=>(
                        <div key={index} className="w-[100%] h-[10%] ">
                            <div className="w-[100%] h-[80%] flex items-start bg-[#663333] gap-6 py-[10px] px-[20px] rounded-2xl relative">
                                <img src={item.images[0]?.url} alt="" className="w-[130px] h-[130px] rounded-md" />
                                <div className="flex items-start justify-center flex-col gap-[5px]">
                                    <p className="md:text-[25px] text-[20px] text-white">{item.name}</p>
                                    <div className="flex items-center gap-[8px] md:gap-[20px]">
                                        <p className="md:text-[18px] text-[12px] text-white">{currency} {item.price}</p>
                                        <p className="md:text-[18px] text-[12px] text-white">Quantity: {item.quantity}</p>
                                        <p className="md:text-[18px] text-[12px] text-white">Size: {item.size}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="md:text-[18px] text-[12px] text-white">Date:<span className="text-white pl-[10px] md:text-[16px] text-[11px]">{new Date(item.date).toDateString()}</span></p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="md:text-[16px] text-[12px] text-white">Payment Method : {item.paymentMethod}</p>
                                    </div>
                                    <div className="absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%]">
                                        <div className="flex items-center gap-[5px]">
                                            <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                                            <p className="md:text-[17px] text-[10px] text-white">{item.status}</p>
                                        </div>
                                    </div>
                                    <div className="absolute md:right-[5%] right-[1%] md:top-[40%] top-[70%]">
                                        <button className="md:px-[15px] md:py-[7px] px-[5px] py-[3px] rounded-md bg-[#101919] text-[#f3f9fc] text-[12px] md:text-[16px] cursor-pointer active:bg-slate-500" onClick={loadOrderData}>Track Order</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))


                }
            </div>
            
        </div>
    );
};

export default Order;