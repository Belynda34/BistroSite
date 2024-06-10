import React from "react";
import "./Home.css";
import "./styles.css";

import Button from "./Button";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";

import { BsFillCupHotFill } from "react-icons/bs";
import { BiBowlRice } from "react-icons/bi";
import { LuGlassWater } from "react-icons/lu";
import { GiCakeSlice } from "react-icons/gi";
import { TiLocation } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { HiMiniReceiptPercent } from "react-icons/hi2";

function Home() {
  return (
    <div className="b">
      <div className="images-background flex flex-col items-center space-y-8 pb-48 mt-10 md:mt-0">
        <h1 className="font-semibold text-6xl mt-48 text-center">
          Best food for
          <br /> your taste
        </h1>
        <p className="text-center">
          Discover delectable cuisine and unforgettable moments <br /> in our
          welcoming, culinary haven.
        </p>
        <div className="space-x-4">
          <Button content="Book A Table" />
          <Button
            content="Explore menu"
            className="border-2 border-black bg-black text-white"
          />
        </div>
      </div>

      <section className="bg-white space-y-20 flex flex-col">
        <h1 className="text-5xl font-bold text-center mt-24">
          Browse Our Menu
        </h1>
        <div class="flex flex-col space-y-8 ml-10  justify-center  md:flex-row md:space-x-10  md:space-y-0">
          <Card
            title="Breakfast"
            description="In the new era of technology we look in the future with certainty and prode for our life"
            icon={BsFillCupHotFill}
          />

          <Card
            title="Main Dishes"
            description="In the new era of technology we look in the future with certainty and prode for our life"
            icon={BiBowlRice}
          />

          <Card
            title="Drinks"
            description="In the new era of technology we look in the future with certainty and prode for our life"
            icon={LuGlassWater}
          />

          <Card
            title="Deserts"
            description="In the new era of technology we look in the future with certainty and prode for our life"
            icon={GiCakeSlice}
          />
        </div>
      </section>

      <div className="bg-gray-50 flex justify-between mx-auto  pb-32 pt-20 mt-24">
        <div className="flex relative left-96">
          <div className="">
            <img
              src="./images/pic2.png"
              alt=""
              className="w-[500px]  h-80 rounded-xl"
            />
          </div>
          <div class="w-auto bg-neutral-700 h-60 border-transparent border-2 rounded-lg relative top-28 right-20 text-white  text-sm pl-8 pb-4 pr-4 space-y-3">
            <p class="mt-8  text-semibold text-xl">Come and visit us</p>
            <p class="flex ">
              <FaPhoneAlt className="text-xl" />
              <span class="relative left-2">(414)857-0107</span>
            </p>
            <p class="flex">
              <HiOutlineMail className="text-2xl pr-2" />
              <span class="relative left-2">happytummy@restaurant.com</span>
            </p>
            <p class="flex">
              <TiLocation className="text-4xl " />
              <span class="relative left-2">
                837 W.Marshall Lane Marshalltown,IA 50158, Los Angeles
              </span>
            </p>
          </div>
        </div>

        <div class="space-y-8 relative left-96">
          <h1 className="font-bold text-5xl">
            We provide healthy
            <br />
            food for your family
          </h1>
          <p className="w-6/12 font-semibold">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance.Rooted in city's rich culinary culture, we aim to honor our
            local roots while infusing a globale palate.
          </p>
          <h5 className="w-6/12 font-sm text-gray-600">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </h5>

          <Button content="More About Us" />
        </div>
      </div>

      <section className="bg-white space-y-16 mt-24 pb-20">
        <h1 class="text-5xl font-semibold text-center md:text-center relative lg:right-96 lg:mr-20 text-normal">
          We also offer unique
          <br /> services for you event
        </h1>

        <div class="flex flex-col space-y-10 justify-center  md:flex-row md:space-x-14 md:space-y-0">
          <Card2 title="Caterings" image="./images/pic3.png" />
          <Card2 title="Birthdays" image="./images/pic4.png" />
          <Card2 title="Weddings" image="./images/pic5.png" />
          <Card2 title="Events" image="./images/pic6.png" />
        </div>
      </section>

      <section className="bg-white flex justify-center space-x-10 relative right-20">
        <div className="flex space-x-4">
          <div>
            <img
              src="./images/pic7.png"
              alt=""
              className="w-80 h-[455px] rounded-b-xl"
            />
          </div>
          <div className="space-y-4">
            <img
              src="./images/pic8.png"
              alt=""
              className="w-64 h-72 rounded-b-xl"
            />
            <img
              src="./images/pic9.png"
              alt=""
              className="w-64  h-52 rounded-xl"
            />
          </div>
        </div>
        <div className="w-96 space-y-8 relative top-20 ">
          <h1 className="w-96 text-5xl font-bold">
            Fastest Food Delivery in City
          </h1>
          <p className="text-lg">
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop
          </p>
          <div className="space-y-2">
            <p className="flex">
              <FaRegClock className="w-8 h-8 p-2 rounded-full bg-rose-800 text-white" />
              <span className="text-lg pl-4 pt-1">
                Delivery within 30 minutes
              </span>
            </p>
            <p className="flex">
              <HiMiniReceiptPercent className="w-8 h-8 p-2 rounded-full bg-rose-800 text-white" />
              <span className="text-lg pl-4 pt-1">Best offer & Prices</span>
            </p>
            <p className="flex">
              <MdShoppingCart className="w-8 h-8 pt-2 pb-1 rounded-full bg-rose-800 text-white" />
              <span className="text-lg pl-4 pt-1">
                Online Services Available
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white mt-28 ">
        <h1 className="text-5xl text-center font-bold">
          What Our Customers Say
        </h1>
        <div className=" flex space-x-10 justify-center  mt-20">
          <Card3
            title=' " The best restaurant "'
            description="Last night, we dined at place and were simply blown away.From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles."
            images="./images/pic20.jpg"
            names="Sophire Robson"
            location="Los Angeles,CA"
          />

          <Card3
            title='" Simply delicious "'
            description="Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner.Each dish was prepared and beautifully presented."
            images="./images/pic21.jpg"
            names="Matt Canon"
            location="San Diego,CA"
          />

          <Card3
            title=' " One of a kind restaurant " '
            description="The culinary experience at place is first to none.The atmosphere is vibrant,the food nothing short of extraordinary.The food was the highlight of our evening Highly recommended"
            images="./images/pic22.jpg"
            names="Andy Smith"
            location="San Francisco,CA"
          />
        </div>
      </section>

      <section className="mt-28 h-auto bg-gray-50 pb-36">
        <div className="flex justify-center pt-24">
          <h1 className="relative right-[415px] text-5xl">
            Our blog & Articles
          </h1>
          <button className="w-[160px] h-[48px] bg-rose-800 rounded-full text-white p-2 relative left-32">
            Read All Articles
          </button>
        </div>

        <div className="flex  mt-28 justify-center ">
          <div className="relative right-36">
            <Card4
              image="./images/pic10.png"
              date="January 3, 2023"
              desc="The secret tips & tricks to prepare burger & pizza for our customers"
              content="Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
            />
          </div>

          <div className="space-y-6 relative right-28">
            <div className="flex space-x-10">
              <Card5
                img="./images/pic11.png"
                date="January 3,2023"
                content="How to prepare the perfect french fries in an air fyer"
              />
              <Card5
                img="./images/pic12.png"
                date="January 3,2023"
                content="How to prepare delicious chicken tenders"
              />
            </div>
            <div className="flex space-x-10">
              <Card5
                img="./images/pic13.png"
                date="January 3,2023"
                content="7 delicious cheesecake recipes you can prepare"
              />
              <Card5
                img="./images/pic14.png"
                date="January 3,2023"
                content="5 great pizza restaurants you should visit this city"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
