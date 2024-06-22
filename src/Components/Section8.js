import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../images/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#0f062c] text-white py-10 lg:px-[8%] md:px-[8%] px-[5%]">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  lg:gap-0 ">
        <div className="flex flex-col items-start mx-0">
          <img src={Logo} alt="Logo" className="h-20 mb-4" />
          <p className="mb-4 text-left">
            Intelliwriter is an AI-powered tool crafted to streamline and
            elevate your writing experience. Whether you're a content creator,
            marketer, student, or business owner, Intelliwriter is designed to
            transform and enhance your content creation process.
          </p>
          <div className="flex space-x-4 my-8">
            <FaFacebook
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
            <FaTwitter
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
            <FaInstagram
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
            <FaLinkedin
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
          </div>
        </div>
        <div className="flex flex-col text-left pl-10 md:pl-15 lg:pl-20">
          <h3 className="text-lg font-bold mb-4 p-0">General</h3>
          <ul className="space-y-2 text-gray-400 cursor-pointer">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">About us</li>
            <li className="hover:text-white">APIs</li>
            <li className="hover:text-white">Blogs</li>
            <li className="hover:text-white">Contact</li>
          </ul>
        </div>
        <div className="flex flex-col text-left pl-10 md:pl-15 lg:pl-0 lg:pr-0">
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="text-gray-400 cursor-pointer space-y-2">
            <li className="hover:text-white">Bypass AI</li>
            <li className="hover:text-white">Social Content</li>
            <li className="hover:text-white">Blog Content</li>
            <li className="hover:text-white">Website Content</li>
            <li className="hover:text-white">Marketing Content</li>
            <li className="hover:text-white">Image Generator</li>
            <li className="hover:text-white">Voice Generator</li>
            <li className="hover:text-white">Text Generator</li>
            <li className="hover:text-white">Chatting</li>
          </ul>
        </div>
        <div className="flex flex-col text-left pl-10 md:pl-15 lg:pr-0 lg:pl-0">
          <h3 className="text-lg font-semibold mb-4 ">Important Links</h3>
          <ul className="text-gray-400 cursor-pointer space-y-2">
            <li className="hover:text-white">Terms and conditions</li>
            <li className="hover:text-white">FAQs</li>
            <li className="hover:text-white">Privacy policy</li>
            <li className="hover:text-white">Ada Compliance</li>
            <li className="hover:text-white">Become an affiliate</li>
            <li className="hover:text-white">Free AI tools</li>
          </ul>
        </div>
      </div>
      <hr className="border-[#221A3D] border-2 my-4" />
      <div className="text-center opacity-60">
        <p>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-xl">
            Intelliwriter ©
          </span>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const Section8 = () => {
  return (
    <div>
      <section className="relative text-white flex flex-col justify-center items-start mt-20">
        <div className="flex flex-col items-start"></div>
      </section>
      <Footer />
    </div>
  );
};

export default Section8;
