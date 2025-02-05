import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";



// import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed z-30 w-full top-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="Logo" className="h-8 w-8" /> */}
          <Link to="/">
            <span className="text-red-700 font-bold text-xl">
              Courier MAnagement
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-black-700 font-medium">
          <ul className="list-none flex gap-8">
            <li>
              <a
                href="#"
                className="hover:text-red-800 font-semibold text-xl hover:bg-black-100 rounded-3xl py-1 px-3 block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-lime-800 font-semibold text-xl hover:bg-lime-100 rounded-3xl py-1 px-3 block"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-lime-800 font-semibold text-xl hover:bg-lime-100 rounded-3xl py-1 px-3 block"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-lime-800 font-semibold text-xl hover:bg-lime-100 rounded-3xl py-1 px-3 block"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-lime-1600 font-semibold text-xl hover:bg-lime-100 rounded-3xl py-1 px-3 block"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        {/* <div className="hidden md:flex space-x-4">
          <button className="border border-lime-600 text-lime-700 px-4 py-2 rounded-full hover:bg-lime-100">
            Track order
          </button>
          <button className="bg-lime-600 text-white px-4 py-2 rounded-full hover:bg-lime-500">
            Get a quote
          </button>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-lime-800 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
          <a href="#" className="block text-lime-800">
            Services
          </a>
          <a href="#" className="block text-lime-800">
            FAQs
          </a>
          <a href="#" className="block text-lime-800">
            Blog
          </a>
          <a href="#" className="block text-lime-800">
            About Us
          </a>
          <a href="#" className="block text-lime-800">
            Contact Us
          </a>
          <button className="w-full border border-lime-600 text-lime-800 px-4 py-2 rounded-full hover:bg-green-100">
            Track order
          </button>
          <button className="w-full bg-lime-600 text-white px-4 py-2 rounded-full hover:bg-lime-700">
            Get a quote
          </button>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
