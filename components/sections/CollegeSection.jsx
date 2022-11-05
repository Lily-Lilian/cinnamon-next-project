import React from "react";
import Button from "../ui/Button";

const CollegeSection = () => {
  return (
    <div className="relative w-full  py-40">
      <div className="grid grid-cols-2 max-w-6xl mx-auto">
        <div className="max-w-xs">
          <img src="/assets/cinn-college.webp" alt="cinn-college" />
        </div>
        <div className="flex flex-col gap-4 max-w-xs pb-4 ">
          <p className="text-gray font-semibold text-base">
            Seize the unique opportunity to participate in a wide range of
            courses conducted by professionals with an impeccable reputation in
            the digital industry.
          </p>
          <Button>See how it works</Button>
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        <img
          className="max-w-lg"
          src="/assets/cinn-college-illustration.webp"
        />
      </div>
    </div>
  );
};

export default CollegeSection;
