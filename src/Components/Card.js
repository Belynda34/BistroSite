import React from "react";

const Card =(props)=>{
    const {title,description,icon:Icon}=props;
    return(
        <div className=" flex justify-center bg-transparent  w-72 h-[400px;] border-2  border-gray-100 rounded-2xl flex-col space-y-6 items-center text-center" >
            <div className="w-20 h-20 rounded-full bg-gray-200 mt-10">
                
                <Icon className='text-5xl relative left-4 top-4 p-1 text-black'/>
                
            </div>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="pr-4 pl-4 text-center">{description}</p>
            </div>
            <p className="pb-10 text-rose-900 font-semibold">Explore Menu</p>
        </div>
    )
}

export default Card;