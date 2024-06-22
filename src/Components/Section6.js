import React from "react";
import LandscapeImg from "../images/SocialAppsLandscape.webp";
import PortraitImg from "../images/SocialAppsMob.webp";
import Logo from "../images/logo.webp";
import { FaRegCircleDot, FaRegCircleCheck } from "react-icons/fa6";
import { BiEqualizer } from "react-icons/bi";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Section6 = () => {
  const plans = [
    {
      icon: <FaRegCircleCheck size={30} className="text-white mr-4" />,
      title: "Starter Plan",
      subtitle: "Basic Pack",
      price: "0 USD/month",
      features: [
        "2000 Content Words",
        "No Free Images",
        "GPT-4 Integration",
        "10 Chats Prompts",
        "Voice Over (20 words per attempt)",
        "All Tools Access",
      ],
    },
    {
      icon: <BiEqualizer size={60} className="text-white mr-4" />,
      title: "Most popular",
      subtitle: "Standard Pack",
      price: "9.99 USD/month",
      features: [
        "Unlimited Content Words",
        "500 Images Prompts",
        "GPT-4 Integration",
        "250 Chats Prompts",
        "Voice Over (200 words per attempt)",
        "All Tools Access",
      ],
    },
    {
      icon: <MdOutlineWorkspacePremium size={50} className="text-white mr-4" />,
      title: "Best one",
      subtitle: "Premium Pack",
      price: "19.99 USD/month",
      features: [
        "Unlimited Content Words",
        "Unlimited Images Prompts",
        "GPT-4 Integration",
        "Unlimited Chats Prompts",
        "Voice Over (Unlimited words)",
        "All Tools Access",
      ],
    },
  ];

  const formatPrice = (price) => {
    const [amount, period] = price.split(" ");
    return (
      <span className="flex items-center">
        <span className="text-5xl font-bold">{amount}</span>
        <span className="text-lg align-baseline ml-1">{period}</span>
      </span>
    );
  };

  return (
    <div>
      <section className="relative text-white flex flex-col justify-center items-start mt-10">
        <div className="flex flex-col items-start lg:mx-20 mx-10 md:mx-20">
          <h2 className="lg:text-7xl md:text-5xl text-3xl font-semibold text-left mt-5">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text uppercase lg:ml-10 md:ml-10 ml-5">
              Future Plans
            </span>
          </h2>
          <h2
            className="lg:text-7xl md:text-5xl text-3xl font-semibold absolute text-center opacity-50 uppercase"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white",
            }}
          >
            Get Started
          </h2>
        </div>
        <p className="lg:text-2xl text-lg font-semibold mx-[10%] my-[5%] mt-12 lg:mx-20 md:mx-50 mx-42 text-left">
          Simple pricing plans for everyone and every budget.
        </p>

        <div className="flex justify-center items-center flex-wrap lg:px-28 md:px-28 px-10  mt-10 space-y-5 lg:space-y-0 lg:space-x-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-tl from-[#423364] to-[#1B1236] hover:bg-gradient-to-tl from-[#271F42] to-[#1A1435] py-5 px-5 rounded-2xl w-full lg:w-80 border-2 ${
                index === 1 ? "border-white  lg:h-[550px] " : "border-[#524C67]"
              }`}
            >
              {index === 1 && (
                <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-[#24163A] to-[#451B78] text-white py-1 px-3 rounded-t-2xl text-center text-lg font-semibold">
                  Recommended
                </div>
              )}
              <div className="flex items-center mb-2 mt-5">
                {plan.icon}
                <div>
                  <h3 className="text-lg text-left">{plan.title}</h3>
                  <p className="text-xl text-gray-300 font-semibold text-left mb-2">
                    {plan.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex justify-start mb-6">
                {formatPrice(plan.price)}
              </div>
              <button className="bg-gradient-to-l from-[#57219D] to-[#6524B6] text-white py-2 px-4 rounded-full text-lg w-full">
                Subscribe Now
              </button>
              <ul className="mt-7">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-left mb-3">
                    <FaRegCircleDot
                      size={12}
                      className="text-[#8FA4C8]  mr-2"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start lg:mx-20 mx-10 md:mx-20 mt-20">
          <h2 className="lg:text-7xl md:text-5xl text-3xl  font-semibold text-left mt-5">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text uppercase lg:ml-10 md:ml-10 ml-5">
              Social Sphere
            </span>
          </h2>
          <h2
            className="lg:text-7xl md:text-5xl text-3xl  font-semibold absolute text-center opacity-50 uppercase"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white",
            }}
          >
            Explore our
          </h2>
        </div>
        <div className="bg-[#0f062c] p-0 m-0 lg:h-32 lg:mt-2 md:h-10 md:w-14 h-25 w-20 lg:w-24 flex justify-center items-center absolute lg:top-[82%] md:top-[92%] top-[89%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-full">
          <img src={Logo} alt="Logo" className="w-24 h-24 object-contain" />
        </div>
        <div className="hidden md:block mx-8 my-10">
          <img src={LandscapeImg} alt="Landscape" className="w-full" />
        </div>
        <div className="block md:hidden mx-10 my-10">
          <img src={PortraitImg} alt="Portrait" className="w-full h-auto" />
        </div>
      </section>
    </div>
  );
};

export default Section6;
