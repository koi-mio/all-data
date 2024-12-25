import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 w-full bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-indigo-600">
            <a href="#">MyBrand</a>
          </div>
          <div className="items-center hidden space-x-8 md:flex">
            <a
              href="#home"
              className="text-gray-600 transition duration-300 hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 transition duration-300 hover:text-indigo-600"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-600 transition duration-300 hover:text-indigo-600"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-600 transition duration-300 hover:text-indigo-600"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="mt-4">
            <a
              href="#home"
              className="block py-2 text-gray-600 transition duration-300 hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-600 transition duration-300 hover:text-indigo-600"
            >
              About
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-600 transition duration-300 hover:text-indigo-600"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-600 transition duration-300 hover:text-indigo-600"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
