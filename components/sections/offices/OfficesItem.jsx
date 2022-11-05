import React from "react";

const OfficesItem = ({ img, title, subtitle }) => {
  return (
    <div>
      <div className="w-[540px] shrink-0 flex flex-col ">
        <img src={img} className="w-max" />
        <div className="flex items-start gap-6 py-4 hover:text-blue ">
          <div className="py-2">
                <img src="/assets/location.svg"  />
            </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-2xl font-MontBold">{title}</h1>
            <p className="text-lg text-gray font-semibold">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficesItem;
