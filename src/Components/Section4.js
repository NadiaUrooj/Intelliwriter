import React from "react";

const Section4 = () => {
  return (
    <div>
      <section className="relative text-white flex flex-col justify-center items-start mt-20">
        <div className="flex flex-col items-start lg:mx-20 mx-10 md:mx-20">
          <h2 className="lg:text-7xl   md:text-5xl text-3xl font-semibold text-center mt-5">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text lg:ml-10  md:ml-10 ml-2 ">
              ADVANCE AI LLMs
            </span>
          </h2>
          <h2
            className="lg:text-7xl   md:text-5xl text-3xl  font-semibold absolute text-center opacity-50 uppercase"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white",
            }}
          >
            dealing with
          </h2>
        </div>
        <p className="lg:text-2xl text-lg font-semibold mx-[10%] my-[5%] mt-12 lg:mx-20 md:mx-50 mx-42 text-left">
          Start your journey with GPT-4, the latest in Advanced AI LLMs, and
          discover a world where technology enhances creativity. Explore how you
          can create compelling content and voiceovers, bringing your unique
          ideas to life. Begin your adventure today and experience the joy of
          creativity unleashed in the digital world.
        </p>
      </section>
    </div>
  );
};

export default Section4;
