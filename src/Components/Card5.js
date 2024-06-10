import React from "react";

const Card5 = (props) =>{ 
     const {img,date,content} = props;
     return(
        <div className="w-[280px]">
            <div>
                <img src ={img} alt=""  className="rounded-tr-xl rounded-tl-xl"/>
            </div>
            <div className="bg-white h-[130px] rounded-br-xl rounded-bl-xl pl-4 pr-2 pt-4 space-y-2">
                <h4 className="text-gray-500">{date}</h4>
                <p className="font-bold">{content}</p>
            </div>
        </div>
     )
}

export default Card5;