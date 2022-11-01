import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div>
      <div className="relative ">
        <nav className="w-full fixed top-0 z-30 bg-white">
          <div className="flex items-center justify-between px-20 space-x-6 py-4 max-w-[1280px] mx-auto">
            <div className="flex items-start">
              <img src="/assets/logo-dark.svg" className="w-40 " />
            </div>
            <div className="list-none flex items-center space-x-4 ">
              <li>Projects</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>

              <div className="flex items-center">
                <Button>Contact Us</Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
