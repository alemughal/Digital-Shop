import React from "react";
import EcommerceCard from "../Components/Card";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Image from "next/image";
import Camera from "@/Assests/camera.png";
import Controller from '@/Assests/controller.png'

const NewArrivals = () => {
  return (
    <>
      <div className="items-start text-start m-10">
        <h1 className="font-bold text-5xl">New Arrivals Products</h1>
        <h3 className="leading-10 text-xl">
          There are many variations Passages
        </h3>
        <div className="flex sm:justify-end sm:items-end sm:-mt-20 md:-mt-20 ">
          <BsFillArrowLeftCircleFill className="text-5xl mr-5 " />
          <BsFillArrowRightCircleFill className="text-5xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-4 gap-6 mb-5 mx-12 sm:mt-12">
        <EcommerceCard />
      </div>

      <div className="flex flex-col md:flex-row gap-6 mx-12 mb-16 h-max sm:h-96">
        <div className="w-full md:w-1/2 h-fit-content bg-black rounded-3xl flex flex-col sm:pt-20 sm:pl-16 pl-10">
          <h2 className=" text-white text-xl sm:pt-0 pt-6">camera Accessories</h2>
          <h3 className="text-white leading-8">
            <span className="font-bold text-4xl">Launch Party</span>
            <br />
            <span className="font-bold text-4xl">Nice Photos</span>
          </h3>
          <div className="">
            <button className="bg-blue-600 text-white rounded-3xl p-2 px-12 py-4 mt-4 leading-7 hover:bg-white hover:text-black">
              Shop By Category
            </button>
          </div>
          <div className="sm:-mt-80 mt-10">
            <Image src={Camera} className="ml-auto" />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-fit-content bg-blue-800 rounded-3xl flex flex-col sm:pt-20 sm:pl-16 pl-10">
          <h2 className=" text-white text-xl sm:pt-0 pt-6">game Accessories</h2>
          <h3 className="text-white leading-8">
            <span className="font-bold text-4xl">Enjoy Game</span>
            <br />
            <span className="font-bold text-4xl">High Tech</span>
          </h3>
          <div className="">
            <button className="bg-yellow-500 text-blue-900 rounded-3xl p-2 px-12 py-4 mt-4 leading-7 hover:bg-white hover:text-black">
            Shop By Category
            </button>
          </div>
          <div className="sm:-mt-48 mt-10">
            <Image src={Controller} className="ml-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
