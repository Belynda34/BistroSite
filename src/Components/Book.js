import React from "react";

import "./Book.css";

function Book() {
  return (
    <div className="">
      <div className=" h-[550px] bg-gray-50 text-center pt-16 space-y-6">
        <h1 className="text-7xl r">Book A Table</h1>
        <p className="t">
          We consider all the drivers of change gives you the components
          <br /> you need to change to create a truly happens
        </p>
      </div>

      <div className="image-background w-[100%] h-[700px] pb-80">
        <div className="bg-white w-[700px] h-[480px]  shadow-2xl mx-auto relative bottom-[230px] rounded-3xl">
          <form className="space-y-5">
            <div className="flex pt-14 pl-10 space-x-5">
              <div className="space-y-2">
                <label className="text-xl font-semibold ">Date</label>
                <br />
                <input
                  type="text"
                  placeholder="04/01/2021"
                  className="w-[19em] h-12 border-2 rounded-full pl-4"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xl font-semibold ">Time</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="w-[19em] h-12 border-2 rounded-full pl-4"
                />
              </div>
            </div>
            <div className="flex pl-10 space-x-5">
              <div className="space-y-2">
                <label className="text-xl font-semibold ">Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-[19em] h-12 border-2 rounded-full pl-4"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xl font-semibold ">Phone</label>
                <br />
                <input
                  type="text"
                  placeholder="x-xxx-xxx-xxxx"
                  className="w-[19em] h-12 border-2 rounded-full pl-4"
                />
              </div>
            </div>
            <div className="pl-10 space-y-4 ">
              <div>
                <label className="text-xl font-semibold ">Total Person</label>
                <br />
                <input
                  type="text"
                  placeholder="1 Person"
                  className="w-[39em] h-12  border-2 rounded-full pl-4 mt-2"
                />
              </div>

            </div>
            <button
              type="submit"
              className="ml-10 w-[35em] h-12 text-center text-white text-lg font-semibold bg-rose-900 rounded-full  "
            >
              Book A Table
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Book;
