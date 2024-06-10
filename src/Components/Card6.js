import React from "react";

const Card6 = (props) => {
  const { img, date, content } = props;
  return (
    <div className="w-[280px]">
      <div>
        <img
          src={img}
          alt=""
          className="w-[300px] rounded-tr-xl rounded-tl-xl"
        />
      </div>
      <div className="bg-white h-[160px] rounded-br-xl rounded-bl-xl pl-4 pr-2 pt-6 space-y-2 shadow-lg">
        <h4 className="text-gray-500">{date}</h4>
        <p className="font-bold text-lg">{content}</p>
      </div>
    </div>
  );
};

export default Card6;
