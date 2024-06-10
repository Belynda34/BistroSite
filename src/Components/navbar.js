import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="h-20  bg-stone-600  overflow-x-hidden overflow-y-hidden md:flex justify-between md:h-16">
        <div className="flex justify-center relative space-x-4 text-white mt-2 md:mt-4 md:ml-20">
          <p className="flex">
            <FaPhoneAlt className="relative top-1 right-1" />
            (414)8570107
          </p>
          <p className="flex">
            <HiOutlineMail className="relative top-1 right-1" />
            yummy@bistrobliss
          </p>
        </div>
        <div className="flex justify-center  space-x-4 mt-2 md:mr-20 md:mt-4">
          <AiOutlineTwitter className="w-8 h-8 p-2 rounded-full bg-gray-400 text-white" />
          <BiLogoFacebook className="w-8 h-8 p-2 rounded-full bg-gray-400 text-white" />
          <BiLogoInstagram className="w-8 h-8 p-2 rounded-full bg-gray-400 text-white " />
          <BsGithub className="w-8 h-8 p-2 rounded-full bg-gray-400 text-white" />
        </div>
      </header>
      <nav className="bg-gray-50 flex justify-between md:flex">
        <Link to="/" className="flex ml-4 mt-4 lg:ml-20 md:ml-2">
          <img src="./images/pic19.png" alt="image1" className="w-12 h-12  " />
          <span className=" pl-2 pt-3 text-2xl font-bold md:text-lg md:font-bold">
            Bistro Bliss
          </span>
        </Link>
        <div
          className={`md:mt-8  ${
            click
              ? `h-96  relative top-24  text-center right-20  md:top-0`
              : `hidden md:flex `
          } md:h-auto md:right-0 lg:mr-96`}
        >
          <ul className="  flex flex-col gap-6 md:flex-row md:gap-0  md:relative bottom-2 lg:gap-0">
            <li className="hover:border-b-2 border-black pb-2 md:hover:bg-amber-50 md:w-24 md:h-10 md:pt-1 md:text-center  md:border-2 md:border-transparent md:rounded-full">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-b-2 border-black pb-2 md:hover:bg-amber-50 md:w-24 md:h-10 md:pt-1 md:text-center  md:border-2 md:border-transparent md:rounded-full">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:border-b-2 border-black pb-2 md:hover:bg-amber-50 md:w-24 md:h-10 md:pt-1 md:text-center  md:border-2 md:border-transparent md:rounded-full">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="hover:border-b-2 border-black pb-2 md:hover:bg-amber-50 md:w-24 md:h-10 md:pt-1 md:text-center  md:border-2 md:border-transparent md:rounded-full">
              <Link to="/pages">Pages</Link>
            </li>
            <li className="hover:border-b-2 border-black pb-2 md:hover:bg-amber-50 md:w-24 md:h-10 md:pt-1 md:text-center  md:border-2 md:border-transparent md:rounded-full">
              <Link to="/contact">Contact</Link>
            </li>
            <Link
              to="/book"
              className="hover:border-b-2 border-black pb-2 md:bg-transparent md:w-32 md:h-10 md:pt-1 md:text-center  md:border-2 md:border-black md:rounded-full md:mr-2 lg:relative left-32"
            >
              <button className="">Book A Table</button>
            </Link>
          </ul>
        </div>
        <div
          className="cursor-pointer   relative top-6 right-10 md:hidden"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
