import React from "react";

const blogsCard = ({ img, span, names, title }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 ">
        <img src={img} />
        <span className="text-primary font-MontSemiBold text-xs uppercase">{span}</span>
        <p className="text-gray font-MontSemiBold hover:text-gray">{names}</p>
        <h1 className="text-primary font-MontBold text-2xl">{title}</h1>
      </div>
    </div>
  );
};

export default blogsCard;
