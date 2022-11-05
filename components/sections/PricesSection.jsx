import React from "react";

const PricesSection = ({ img, title, paragraph, tags, className }) => {
  return (
    <div>
      <div className="max-w-6xl flex flex-col mx-auto gap-6 mt-32 ">
        <div className={className}>
          <img
            className="price-image transition ease-in duration-300"
            src={img}
          />
        </div>
        <div className="flex space-x-4 text-gray font-MontBold text-xs py-3 uppercase">
          {tags?.map((el) => (
            <div>{el}</div>
          ))}
        </div>
        <h1 className="text-4xl text-primary font-MontBold  leading-[46px]">
          {title}
        </h1>
        <p className="text-base trunkit max-w-3xl text-gray">{paragraph}</p>
      </div>
    </div>
  );
};

export default PricesSection;
