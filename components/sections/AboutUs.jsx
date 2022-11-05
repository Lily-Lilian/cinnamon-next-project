import React from "react";
import Button from "../ui/Button";

const AboutUs = () => {
  return (
    <div className="relative bg-beige mt-24 w-full flex flex-col space-y-8 py-24">
      <div className=" max-w-6xl w-full mx-auto py-24">
        <h1 className="text-5xl text-primary font-MontBold ">Who we are</h1>
        <p className="text-base text-gray max-w-sm py-8 font-semibold">
          Meet our international teams made up of 86 innovators, branched into 8
          departments, that influence the market throughout 20 different
          countries.
        </p>
        <div className="flex space-x-32 list-none text-primary  text-xl font-MontBold py-6">
          <div className="flex flex-col gap-8">
            <li>Product design </li>
            <li>Web development </li>
            <li>Mobile development </li>
            <li>Quality assurance</li>
            <li>Marketing </li>
          </div>
          <div className="flex flex-col gap-8">
            <li>Project management </li>
            <li>Human resources </li>
            <li>Sales </li>
            <li>Fluffy friends</li>
          </div>
        </div>
        <div className="py-4">
        <Button>Read About Us</Button>
        </div>
      </div>
      <div className="absolute right-0 -translateY-[30%] max-w-[440px]">
        <img
         
          src="/assets/who-we-are.webp"
          alt="who-we-are"
        />
      </div>
    </div>
  );
};

export default AboutUs;
