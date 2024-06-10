import React from "react";



const Book = (props)=>{
    const {img,width} = props;
    return(
        <div className={`h-16 bg-white ${width} rounded-lg flex items-center justify-center`}>
            <img src={img} alt=""/>
        </div>
    )
}

export default Book;