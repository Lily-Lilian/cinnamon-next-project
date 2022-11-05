import React from "react";
import Button from "../../ui/Button";

const ServicesItem = ({ img, title, paragraph }) => {
  return (
    <div>
      <div className="grid gap-8 text-white">
        <div className="flex flex-col">
          <div className="h-20 w-20">
            <img src={img} />
          </div>
          <div className="py-6">
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <p className="py-6 text-base text-color  tracking-tight">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
