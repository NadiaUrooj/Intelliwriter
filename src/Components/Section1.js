import React from "react";
import Icon from "../images/Button-icon.svg";
import { Typewriter } from "react-simple-typewriter";

const Section1 = () => {
  const gradientTextStyle = {
    background: "-webkit-linear-gradient(45deg, #c89aff, #fa80b5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const sectionStyle = {
    background: "radial-gradient(circle at top left, #391375 5%, #0F062C 95%)",
  };

  return (
    <section
      className="absolute inset-0 text-white flex flex-col justify-center items-center lg:pt-[50%]  md:pt-[40%] pt-[80%] "
      style={sectionStyle}
    >
      <div className="bg-[#1c0a42] border border-[#a78aff] rounded-2xl py-4 lg:px-8 px-2 mx-2 md:mb-10 mb-4 lg:mb-2">
        <h2 className="text-lg font-bold text-center ">
          AI Experts in Image, Voice, and Content Creation{" "}
          <span style={gradientTextStyle}>Intelli GPT-4.</span>
        </h2>
      </div>
      <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold mt-4 mb-6 z-10 md:mb-12">
        Platform for Crafting Content
      </h1>
      <h1 className="text-white lg:text-5xl md:text-4xl text-2xl font-bold mt-4 lg:mt-0 lg:px-12 px-5 lg:py-10 py-4 rounded-lg bg-[#4D0663] lg:w-[36%] md:w-[35%] w-[60%] md:mb-10  z-10">
        <Typewriter
          words={["AI Speech", "AI Visuals", "AI Content"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1000}
        />
      </h1>

      <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold mt-4 lg:mt-0 mb-6 lg:mb-0 z-10">
        with IntelliWriter.
      </h1>
      <p className="text-lg font-semibold mx-[10%] my-[5%] z-10 md:mb-20 mb-10 lg:my-[2%] ">
        AI Content Generator is here to help you create high-quality content in
        just a few seconds.
      </p>
      <button className="bg-gradient-to-br from-[#6B41FF] via-[#B347FF] via-[#F757EF] via-[#FB8DA4] to-[#FFC553]  border-[#342C4D] border-4 rounded-lg text-white font-bold text-center py-3 px-6 lg:px-4 flex items-center justify-center font-semibold lg:text-4xl text-2xl   mb-[30%] z-10">
        <img
          src={Icon}
          alt="Button Icon"
          className="h-5 w-5 mr-2"
          style={{ stroke: "#ffffff" }}
        />
        Generate with AI
      </button>
    </section>
  );
};

export default Section1;
