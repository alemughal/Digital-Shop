import React from "react";

const Newsletter = () => {
  return (
    <div className="sm:w-12/12 bg-green-500 bg-gradient-to-b from-sky-400 via-rose-400 to-lime-400 text-white sm:h-fit-content mx-12 items-center justify-center text-center p-24 rounded-xl flex flex-col">
      <h2 className="font-medium md:text-lg text-xl">
        Sign Up Newsletter & Promotions!
      </h2>
      <br />
      <br />
      <h3>
        <span className="md:text-6xl md:font-bold text-4xl">Get 25% Discount</span>
        <br />
        <span className="md:text-6xl text-3xl">On Your Next purchase</span>
      </h3>
      <br />
      <br />
      <div className="mx-15">
        <div className="relative">
          <input
            type="email"
            className="py-3 px-5 md:px-48 md:py-6 text-start block text-white bg-transparent hover:border-black rounded-full text-sm"
            placeholder="Enter Your Email"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-red-600 py-3 px-4 rounded-full font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;