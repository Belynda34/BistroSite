import React from "react";

const Card7 = (props) =>{
    const {img,cost,title,desc} = props;

    return(
        <div className="w-[275px]">
            <div>
                <img src={img} alt={title} className="w-[300px] h-[200px] rounded-tr-2xl rounded-tl-2xl"/>
            </div>
            <div className="h-[200px] border-2 border-t-0 border-gray-300 rounded-br-2xl rounded-bl-2xl pt-8 text-center space-y-3 text-lg">
                <h1 className="text-rose-900 font-bold">{cost}</h1>
                <h1 className="font-bold">{title}</h1>
                <p className="pr-2 pl-2 text-gray-600">{desc}</p>
            </div>
        </div>
    )
}

export default Card7;