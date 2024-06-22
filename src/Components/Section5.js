import React from "react";
import Feature1 from "../images/feature1.png";
import Feature2 from "../images/feature2.png";
import Feature3 from "../images/feature3.png";
import Feature4 from "../images/feature4.png";
import Feature5 from "../images/feature5.png";
import Feature6 from "../images/feature6.png";
import Feature7 from "../images/feature7.png";
import Feature8 from "../images/feature8.png";
import Feature9 from "../images/feature9.png";
import Feature10 from "../images/feature10.png";
import Feature11 from "../images/feature11.png";
import Feature12 from "../images/feature12.png";

const Card = ({ imageSrc, heading, text }) => {
  return (
    <div className="bg-gradient-to-tl from-[#423364] to-[#1A1435] rounded-lg shadow-md px-4 py-3  flex flex-col items-center ">
      <img src={imageSrc} alt={heading} className="w-32 h-32 object-cover" />
      <h3 className="lg:text-2xl text-xl font-semibold mt-4 text-white px-4">
        {heading}
      </h3>
      <p className="mt-4 px-5 text-base text-[#C7CDD1]">{text}</p>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      imageSrc: Feature1,
      heading: "Image Generator",
      text: "Effortlessly transform words into captivating visuals with our...",
    },
    {
      imageSrc: Feature2,
      heading: "Social Ads",
      text: "Transform social ads with AI. Craft stunning posts...",
    },
    {
      imageSrc: Feature3,
      heading: "Youtube Content",
      text: "Craft comprehensive content for you Youtube Channel effortlessly...",
    },
    {
      imageSrc: Feature4,
      heading: "Content Generator",
      text: "Fuel your content effortlessly with our AI. Generate...",
    },
    {
      imageSrc: Feature5,
      heading: "Social Ads",
      text: "Transform your words into captivating AI speech with...",
    },
    {
      imageSrc: Feature6,
      heading: "Digital Marketing",
      text: "Boost your marketing with AI-generated content, crafting captivating...",
    },
    {
      imageSrc: Feature7,
      heading: "Content Rewrite",
      text: "Effortlessly revamp your content and rewriting text with...",
    },
    {
      imageSrc: Feature8,
      heading: "Speech Generator",
      text: "Unleash the power of speech with your voice,...",
    },
    {
      imageSrc: Feature9,
      heading: "Course Builder",
      text: "Craft comprehensive courses effortlessly with our AI. Build...",
    },
    {
      imageSrc: Feature10,
      heading: "Content Summary",
      text: "Summarize content effortlessly with our AI to simplify...",
    },
    {
      imageSrc: Feature11,
      heading: "Website Content",
      text: "Craft your website effortlessly! Our AI generates compelling...",
    },
    {
      imageSrc: Feature12,
      heading: "Content Grammar",
      text: "Perfect your content and enhance grammar flawlessly with...",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div>
      <section className="relative text-white flex flex-col justify-center items-start mt-20">
        <div className="flex flex-col items-start lg:mx-20 mx-10 md:mx-20">
          <h2 className="lg:text-7xl md:text-5xl text-3xl font-semibold text-left mt-5">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text uppercase md:ml-10 lg:ml-10 ml-5 ">
              features
            </span>
          </h2>
          <h2
            className="lg:text-7xl md:text-5xl text-3xl font-semibold absolute text-center  opacity-50 uppercase"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white",
            }}
          >
            distinctive
          </h2>
        </div>
        <p className="lg:text-2xl text-lg font-semibold mx-[10%] my-[5%] mt-12 lg:mx-20 md:mx-50 mx-42 text-left">
          Our team of professionals has deep experience in AI development and an
          unwavering commitment to your security and privacy. Discover the power
          of our innovative features designed to unleash your potential and
          drive success.
        </p>
      </section>
      <CardGrid />
    </div>
  );
};

export default Section5;
