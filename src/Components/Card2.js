import React from "react";

const Card2 = (props) => {
  const { image, title } = props;
  return (
    <div className="bg-white flex flex-col items-center text-left space-y-5">
      <div>
        <img src={image} alt={title} className="w-72 h-80 rounded-2xl" />
      </div>
      <div className="w-72 space-y-4 pl-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="">
          In the new era of technology we look in the future with certainty for
          life
        </p>
      </div>
    </div>
  );
};

export default Card2;
