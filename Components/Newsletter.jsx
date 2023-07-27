import React from "react";

const Newsletter = () => {
  return (
    <div className="sm:w-12/12 bg-green-500 bg-gradient-to-b from-sky-400 via-rose-400 to-lime-400 text-white sm:h-fit-content mx-12 items-center justify-center text-center p-24  rounded-xl flex flex-col">
      <h2 className="font-medium lg:text-lg sm:text-sm">
        Sign Up Newsletter & Promotions!
      </h2>
      <h3>
        <span className="text-3xl">Get 25% Discount</span>
        <br />
        <span className="text-3xl">On Your Next purchase</span>
      </h3>
      <br />
      <input
        type="email"
        className="py-3 px-5 block text-black border-gray-200 rounded-full text-sm"
        placeholder="Enter Your Email "
      />
      <button className="bg-white text-red-600 py-3 px-5 rounded-full mt-5 font-bold w-full sm:w-auto">
        Get Started
      </button>
    </div>
  );
};

export default Newsletter;
