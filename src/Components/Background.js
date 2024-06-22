import React from "react";
import Img from "../images/hero_bg.webp";

const Background = ({ children }) => {
  return (
    <div className="pt-20">
      <div className="min-h-screen flex flex-col md:flex-row items-start justify-between">
        <div className="flex-1 pt-20 lg:pt-24">{children}</div>
        <div className="w-full md:w-auto md:h-[70vh] lg:h-[100vh] h-[100vh] w- flex justify-end">
          <img
            src={Img}
            alt="Hero"
            className="w-full h-[80vh] md:w-auto md:h-full lg:h-full opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
