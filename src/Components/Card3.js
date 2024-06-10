import React from 'react';

const Card3 = (props) =>{
    const {title,description,images,names,location}=props;
    return(
        <div className='w-[440px] h-[415px] bg-gray-50  space-y-6 pl-12 pb-12 pr-12 rounded-2xl'>
            <h1 className='text-2xl font-bold text-rose-800  pt-14'>{title}</h1>
            <p className='text-lg'>{description}</p>

            <div className='w- h-[1px] bg-gray-200 mt-96'></div>
            <div className='flex'>
                <div>
                    <img src={images}  alt='' className='mt-2 w-16 h-16 rounded-full'/>
                </div>
                <div className='pl-4 pt-2 space-y-2'>
                    <h1 className='text-lg font-bold'>{names}</h1>
                    <p>{location}</p>
                </div>
            </div>

        </div>
    );
}

export default Card3;