import React from "react";

const Button = ({ children, className }) => {
  return (
    <div>
      <button
        className={` outline-none bg-blue border-2 border-blue text-white px-8 py-2 relative overflow-hidden ${className} w-max`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
