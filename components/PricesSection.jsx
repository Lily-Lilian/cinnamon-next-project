import React from "react";

const PricesSection = ({ img, title, paragraph, tags }) => {
  return (
    <div>
      <div className="max-w-6xl flex flex-col">
        <img src={img} />
        <div className="flex space-x-4 text-gray">
          {tags.map((el) => (
            <div>{el}</div>
          ))}
        </div>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default PricesSection;
