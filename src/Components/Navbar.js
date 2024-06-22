import React, { useState } from "react";
import Logo from "../images/logo.webp";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const aiToolOptions = [
    { id: 1, name: "Blog Content" },
    { id: 2, name: "Social Media" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Website" },
    { id: 5, name: "Course Builder" },
    { id: 6, name: "AI Image Generator" },
    { id: 7, name: "AI Voice Generator" },
    { id: 8, name: "Image Caption Generator" },
    { id: 9, name: "Speech Content" },
    { id: 10, name: "Youtube Content" },
    { id: 11, name: "AI Char" },
    { id: 12, name: "Free AI Tools" },
  ];

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-10 h-20 backdrop-blur-sm bg-[#7539C2] bg-opacity-20 text-white text-xl font-normal border-b-2 border-gray-600 z-50">
      <div className="container mx-auto px-[5%] py-[1%] flex justify-between items-center">
        <div className="flex items-center pr-5 pt-2">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>

        <div className="hidden lg:flex space-x-20 items-center">
          <ul className="flex space-x-6 items-center">
            <li className="hover-custom">Home</li>
            <li className="hover-custom">About</li>
            <li className="relative group">
              <span
                className="hover-custom cursor-pointer flex items-center"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                AI Tools
                <svg
                  className="w-4 h-4 ml-1 lg:hidden"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 bg-black shadow-md mt-1 py-2 w-max transition-all duration-300 rounded-2xl grid grid-cols-3 gap-4 text-left">
                  {aiToolOptions.map((option) => (
                    <li
                      key={option.id}
                      className="px-4 py-2 hover-custom hover:cursor-pointer"
                    >
                      {option.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="hover-custom">Bypass AI</li>
            <li className="hover-custom">APIs</li>
            <li className="hover-custom">Pricing</li>
            <li className="hover-custom">Blogs</li>
            <li className="hover-custom">Become an Affiliate</li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-[#542294] text-white px-6 py-1 rounded-full text-lg">
              Register
            </button>
            <button className="border-white border-2 text-white px-6 py-1 rounded-full">
              Login
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-black shadow-md">
          <ul className="space-y-2 p-4 text-center">
            <li className="hover-custom">Home</li>
            <li className="hover-custom">About</li>
            <li className="relative group">
              <div
                onClick={handleDropdownToggle}
                className="flex justify-center items-center hover-custom cursor-pointer"
              >
                AI Tools
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {isDropdownOpen && (
                <ul className="bg-black shadow-md mt-1 py-2 w-full transition-all duration-300 grid grid-cols-3 gap-4 rounded-2xl text-center">
                  {aiToolOptions.map((option) => (
                    <li
                      key={option.id}
                      className="px-4 py-2 hover-custom cursor-pointer"
                    >
                      {option.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="hover-custom">Bypass AI</li>
            <li className="hover-custom">APIs</li>
            <li className="hover-custom">Pricing</li>
            <li className="hover-custom">Blogs</li>
            <li className="hover-custom">Become an Affiliate</li>
            <div className="flex flex-col space-y-2 mt-4">
              <button className="bg-[#542294] text-white px-6 py-1 rounded-full text-lg">
                Register
              </button>
              <button className="border-white border-2 text-white px-6 py-1 rounded-full">
                Login
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
