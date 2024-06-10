import React from "react";
import { BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <footer className="h-auto bg-stone-700  pb-16">
        <section className="flex flex-col  text-gray-300 p-1 pl-10  md:flex-row md:justify-center md:space-x-32">
          <div className="space-y-6 mt-20  ">
            <div className="flex">
              <img
                src="./images/pic19.png"
                alt="image1"
                className="w-12 h-12 "
              />
              <span className="pt-4 pl-4 text-2xl font-bold">Bistro Bliss</span>
            </div>
            <p class="w-72 justify-normal">
              In the new era of technology we look in the future with certainity
              and pride to for our company and.
            </p>

            <div className="flex space-x-4 mt-2 md:mr-20 md:mt-4">
              <AiOutlineTwitter className="w-8 h-8 p-2 rounded-full bg-rose-800 text-white" />
              <BiLogoFacebook className="w-8 h-8 p-2 rounded-full bg-rose-800 text-white" />
              <BiLogoInstagram className="w-8 h-8 p-2 rounded-full bg-rose-800 text-white " />
              <BsGithub className="w-8 h-8 p-2 rounded-full bg-rose-800 text-white" />
            </div>
          </div>

          <div className="mt-20">
            <h1 className="font-bold text-2xl">Pages</h1>
            <ul className="space-y-4 mt-8">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Menu</Link>
              </li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>Delivery</li>
            </ul>
          </div>

          <div className="mt-20">
            <h1 className="font-bold text-2xl">Utility Pages</h1>
            <ul className="space-y-4 mt-8 ">
              <li>Start here</li>
              <li>Styleguide</li>
              <li>Password Protected</li>
              <li>404 Not Found</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li>View More</li>
            </ul>
          </div>

          <div className="mt-20 space-y-4">
            <h1 className="font-bold text-2xl">Follow Us on Instagram</h1>
            <div className="flex space-x-5">
              <img
                src="./images/pic15.png"
                alt=""
                className="w-28 rounded-xl"
              />
              <img
                src="./images/pic16.png"
                alt=""
                className="w-28 rounded-xl"
              />
            </div>
            <div className="flex space-x-5">
              <img
                src="./images/pic17.png"
                alt=""
                className="w-28 rounded-xl"
              />
              <img
                src="./images/pic18.png"
                alt=""
                className="w-28 rounded-xl"
              />
            </div>
          </div>
        </section>

        <div className="h-0.5 mt-10 bg-gray-300"></div>
        <p className="text-gray-300 text-center relative top-10">
          Copyright &copy; 2023 Hashtag Developer All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
