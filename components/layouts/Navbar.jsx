import React from "react";
import Button from "../ui/Button";
import Logo from "../assets/Logo"


const Navbar = () => {
const [hide, setHide] = React.useState(true);
const [active, setActive] = React.useState(false);
const [scrollY, setScrollY] = React.useState(undefined);

React.useEffect(() => {
  const handleScroll = () => {
    const prevY = scrollY;
    const currentY = window.pageYOffset;
    if (currentY >= 10) setActive(true);
    else setActive(false);
    setScrollY(currentY);
  };
  window.addEventListener('scroll', handleScroll);
});

  return (
    <div>
      <div className="relative  ">
        <nav className={`${active && 'bg-white'} w-full fixed top-0 z-30`}>
          <div className="flex items-center justify-between py-4 max-w-4xl lg:max-w-6xl mx-auto">
            <div className="flex items-start">
              <Logo className="w-20 " color={!active? 'white':"#262626"}/>
            </div>
            <div className={`${!active && 'text-white'} list-none lg:flex items-center font-MontSemiBold space-x-8 cursor-pointer  hidden`}>
              <li className="hover:text-blue">Projects</li>
              <li className="hover:text-blue">Services</li>
              <li className="hover:text-blue">About Us</li>
              <li className="hover:text-blue">Careers</li>
              <li className="hover:text-blue">Blog</li>
              <div className="flex items-center space-x-6 ">
                <button className={`${!active ? 'border-white': 'border-blue'} border-2 rounded-full w-10 h-10 flex items-center justify-center p-0`}>
                  <div className={`${!active &&'color'} button`}></div>
                </button>
                <Button>Contact Us</Button>
              </div>
            </div>
            <div className="lg:hidden flex">
                <img src="/assets/mobile-menu-icon-dark.d2469ff9.svg"/>
                </div>
          </div>
         
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
