import React from "react";
import Img1 from "../images/img1.png";
import Img2 from "../images/img2.png";
const Section2 = () => {
  const gradientTextStyle = {
    background: "-webkit-linear-gradient(45deg, #c89aff, #fa80b5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div>
      <section className="relative text-white flex flex-col text-left justify-center items-center mt-20 lg:pt-48 md:mt-0 md:pt-0">
        <div className="flex flex-col items-center">
          <h2 className="lg:text-7xl  text-5xl font-semibold text-center mt-5">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              ABOUT US
            </span>
          </h2>
          <h2
            className="lg:text-7xl  text-5xl font-semibold absolute text-center opacity-50"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white",
            }}
          >
            Our Story &
          </h2>
        </div>
        <p className="lg:text-2xl text-lg font-semibold mx-[10%] my-[5%] mt-12 lg:mx-60 md:mx-50 mx-42">
          Intelliwriter is an AI-based content generator designed to simplify
          and enhance your writing experience. Whether you are a content
          creator, marketer, student, or business owner, Intelliwriter is here
          to take your content creation process to a whole new level.
        </p>
      </section>
      <section>
        <div className="container mx-auto px-10 lg:px-18 flex flex-col lg:flex-row items-start text-white">
          <div className="flex-1 flex justify-center lg:justify-start">
            <img
              src={Img1}
              alt="Image Design"
              className="w-70vw lg:w-40vw mb-10"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center lg:ml-10">
            <h2 className="lg:text-6xl text-4xl text-left font-semibold mb-[5%]">
              Innovative
              <span className="font-bold" style={gradientTextStyle}>
                {" "}
                Image
              </span>{" "}
              Design
            </h2>
            <p className="lg:max-w-[100%] max-w-full font-semibold text-xl mb-10 text-left">
              The Intelliwriter Image Generator Module is a powerful addition to
              the Intelliwriter platform, enabling users to effortlessly create
              custom images that enhance their written content. With intuitive
              controls and advanced algorithms, this module ensures a seamless
              integration of dynamic visuals, elevating the overall impact and
              engagement of your message across various platforms.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-10 lg:px-18 flex flex-col lg:flex-row items-start text-white mt-[5%] ">
          <div className="flex-1 flex flex-col justify-center mr-10">
            <h2 className="lg:text-6xl text-4xl text-left font-semibold mb-[5%]">
              Enhance
              <span className="font-bold" style={gradientTextStyle}>
                {" "}
                Voice
              </span>{" "}
              Experience
            </h2>
            <p className="lg:max-w-[100%] max-w-full font-semibold text-xl mb-10 text-left">
              Discover the impact of professional voice-overs with our
              cutting-edge voice services. Ideal for both novices and seasoned
              professionals, our platform not only enhances your projects with
              high-quality audio but also offers a unique voice replication
              feature. With intuitive controls and advanced technology, you can
              input a voice sample and generate the same voice tone across your
              projects, ensuring consistency and quality.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img src={Img2} alt="Image Design" className="w-70vw lg:w-40vw " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
