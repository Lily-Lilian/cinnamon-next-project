import React from "react";
import Button from './../ui/Button';

const ContactUs = () => {
  return (
    <div className="relative bg-beige mt-24 w-full">
        <div className="py-40">
      <div className="flex flex-col items-center gap-24">
        <h1 className="text-6xl font-MontBold max-w-3xl leading-snug text-center ">Have a project in mind? Let's work together.</h1>
        <Button>Contact Us</Button>
      </div>
      <div className="absolute left-0  bottom-0 max-w-sm">
        <img src='/assets/image (16).png'/>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
