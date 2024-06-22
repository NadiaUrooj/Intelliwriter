import React from "react";
import Model from "./Model.js";

const Section2 = () => {
  return (
    <div>
      <section className="relative text-white flex flex-col justify-center items-start mt-20 ">
        <div className="flex flex-col items-start lg:mx-20 mx-10 md:mx-20">
          <h2 className="lg:text-7xl   md:text-5xl text-3xl font-semibold text-center mt-5">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text uppercase lg:ml-10 md:ml-10 ml-5">
              Images & nfts
            </span>
          </h2>
          <h2
            className="lg:text-7xl  md:text-5xl text-3xl font-semibold absolute text-center opacity-50 uppercase"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white",
            }}
          >
            get started with
          </h2>
        </div>
        <p className="lg:text-2xl text-lg font-semibold mx-[10%] my-[5%] mt-12 lg:mx-20 md:mx-50 mx-42 text-left">
          Begin your creative odyssey with Images & NFTs. Immerse yourself in a
          realm where art merges with innovation, enabling exploration,
          creation, and sharing of your distinct vision through digital marvels
          and NFTs. Start now to ignite limitless digital creativity.
        </p>
        <div className="slider"></div>{" "}
      </section>
    </div>
  );
};

export default Section2;
