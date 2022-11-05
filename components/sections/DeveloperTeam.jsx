import React from "react";
import Button from "../ui/Button";

const DeveloperTeam = () => {
  return (
    <div className="bg-dark text-white Developer-team w-full">
      <div className="grid grid-cols-2 gap-8 py-32 max-w-6xl mx-auto">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-MontBold">We’re growing</h1>
          <p className="max-w-sm text-white my-8 text-base">
            Jump on board with Cinnamon and get the privilege of working on
            challenging projects for leading global companies! Make the world a
            better, more connected place.
          </p>
          <Button>See All Positions</Button>
        </div>
        <div className="flex flex-col space-y-8 py-4 w-4/5 text-2xl font-semibold">
            <li className="flex justify-between items-center border-b border-gray pb-6">Androind Developer<img className="h-6 w-10" src="/assets/arrowRightWhite.webp" alt/></li>
            <li className="flex justify-between items-center border-b border-gray pb-6 ">Android Developer<img className="h-6 w-10" src="/assets/arrowRightWhite.webp" alt/></li>
            <li className="flex justify-between  items-center border-b border-gray pb-6 ">Backend Development Team Lead <img className="h-6 w-10" src="/assets/arrowRightWhite.webp" alt/></li>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTeam;
