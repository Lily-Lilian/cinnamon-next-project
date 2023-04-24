import React from "react";

const CaseStudy = () => {
  return (
    <div className="mt-12 w-full">
      <div className="grid grid-cols-5 pt-24 max-w-6xl mx-auto">
        <div className="col-span-3 flex flex-col">
          <h1 className="text-primary leading-normal font-MontBold text-4xl py-2">
            They’re consistent, and the communication is good.
          </h1>
          <p className="py-2 text-base font-MontSemiBold text-gray">
            When I have a deadline, they would work extra hours on the weekend
            and after hours. Cinnamon gives the impression of being a smaller
            team that’s focused on customers.
          </p>
          <div className="flex  items-center py-6 space-x-4 mt-4">
            <img className="h-20 w-20" src="/assets/image (15).png" alt="" />
            <div className="flex flex-col">
              <h1 className="text-primary text-2xl font-MontBold">Garin Toren,</h1>
              <p className="text-base font-SemiBold ">CEO, ping</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex place-items-end flex-col pt-12">
          <img className="w-52 h-16" src="/assets/image (14).png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2  py-4 max-w-6xl mx-auto">
        <div className="flex space-x-12 h-6 w-10">
          <img src="/assets/arrow-left.webp" alt="" />
          <img src="/assets/arrow-right.webp" alt="" />
        </div>
        <div className="flex space-x-4 place-self-end">
          <img src="/assets/arrowRight.6bd387a0.svg" alt="" />
          <h1 className="uppercase text-blue border-b-2 border-blue font-MontBold">
            View case study
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
