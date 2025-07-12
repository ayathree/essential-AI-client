

const Background = ({heroCount}) => {
    
       if(heroCount===0){
        return <div className="bg-white w-[100%] h-[100%] float-right overflow-auto object-cover flex justify-center items-center">
            <p className="bg-white w-[50%] flex-1"></p>
            <img src="https://i.ibb.co/237BmLss/image.png" alt="" className="w-[50%] flex-1"/></div>

       }
       else if(heroCount===1){
        return <div className="bg-white w-[100%] h-[100%] float-right overflow-auto object-cover flex justify-center items-center">
            <p className="bg-white w-[50%] flex-1"></p>
            <img src="https://i.ibb.co/4nWmD87F/image.png" alt="" className="w-[50%] flex-1"/></div>

       }
        else if(heroCount===2){
        return <div className="bg-white w-[100%] h-[100%] float-right overflow-auto object-cover flex justify-center items-center">
            <p className="bg-white w-[50%] flex-1"></p>
            <img src="https://i.ibb.co/YBZgJkFy/image.png" alt="" className="w-[50%] flex-1"/></div>

       }
       else if(heroCount===3){
        return <div className="bg-white w-[100%] h-[100%] float-right overflow-auto object-cover flex justify-center items-center">
            <p className="bg-white w-[50%] flex-1"></p>
            <img src="https://i.ibb.co/gZKcBMYC/image.png" alt="" className="w-[50%] flex-1"/></div>

       }
    }
    

export default Background;