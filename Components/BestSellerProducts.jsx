"use client";

import EcommerceCard from "../Components/Card";
import React from "react";
import Laptop from "@/Assests/new-laptop.png";
import Image from "next/image";
import { motion } from "framer-motion";

const BestSellerProducts = () => {
  return (
    <>
      <div className="items-center text-center">
        <h1 className="font-bold text-5xl">Best Seller Products</h1>
        <h3 className="leading-10 text-xl">
          There are many variations Passages
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-4 gap-6 mb-5 mx-12 sm:mt-12">
        <EcommerceCard />
      </div>

      <div className="flex flex-col sm:flex-row bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 text-white items-center justify-start p-10 px-20 rounded-xl mx-12 mb-5">
        <div className="sm:w-5/12 sm:pl-8 sm:order-last order-last w-full relative sm:h-72 h-52">
          <div className="absolute bottom-0 left-3/3 transform -translate-x-4/4 sm:-mt-10 ">
            <img src={"https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Free-Mockup-Scene.png"} className="" />
          </div>
        </div>
        <div className="sm:w-7/12 pt-16 sm:pt-0 pl-10">
          <h2 className="text-2xl">Asus Zenbook Duo</h2>
          <h3 className="font-bold text-5xl leading-tight">
            <span>The Laptop</span>
            <br />
            <span>Of Tomorrow</span>
          </h3>
          <div className="">
            <button className="bg-pink-500 text-white rounded-3xl p-2 px-12 py-3 mt-4 leading-7 hover:bg-white hover:text-black">
              Shop Pre Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellerProducts;
