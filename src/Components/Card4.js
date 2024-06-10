import React from "react";

const Card4 = (props) => {
  const { image, date, desc, content } = props;
  return (
    <div className="w-[500px]">
      <div>
        <img
          src={image}
          alt=""
          className="w-[500px] h-[390px] rounded-tr-2xl rounded-tl-2xl"
        />
      </div>
      <div className="bg-white h-[254px] rounded-br-2xl rounded-bl-2xl pl-6 pt-4 pr-8 pb-10 space-y-4">
        <h5 className="text-gray-500">{date}</h5>
        <h1 className="font-bold text-lg">{desc}</h1>
        <p className="text-normal">{content}</p>
      </div>
    </div>
  );
};

export default Card4;
