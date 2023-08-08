"use client";

import React from "react";
import Iphone from "@/Assests/iphone.png";
import Headphones from "@/Assests/headphones.png";
import Handsfree from "@/Assests/handsfree.png";
import Laptop from "@/Assests/laptop.png";
import Drone from "@/Assests/drone.png";
import Watch from "@/Assests/watch.png";
import Speaker from "@/Assests/speaker.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 gap-6 mb-5 mx-12 sm:mt-12    ">
        <div className="bg-black h-fit-content  text-white rounded-3xl justify-start ">
          <h2 className="text-xl sm:px-20 sm:pt-12 pl-7 pt-10">
            Blast Past Fast.
          </h2>
          <h3 className="text-lg sm:px-20 sm:pt-2 pl-7 ">
            <span className="text-4xl sm:text-5xl leading-tight">
              IPhone 12 Pro
            </span>
            <br />
            <span className="text-4xl">It's A Leap Year.</span>
          </h3>
          <br />
          <div className="sm:px-20 px-8">
            <button className="bg-sky-600 text-white rounded-3xl p-2 px-10 py-5 mt-4 leading-7 hover:bg-white hover:text-black">
              Shop By Category
            </button>
          </div>
          <br />
          <motion.div
            className="p-0"
            animate={{ x: [-50, 50, 0] }}
            transition={{ duration: 3.5, ease: "easeInOut", loop: Infinity }}
          >
            <img src={"https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-21.png"}/>
          </motion.div>
        </div>
        <div className="bg-orange-500 h-fit-content  text-white rounded-3xl justify-start ">
          <motion.div
            className="pb-0"
            animate={{ x: [50, 0, 70], y: [60, 0, -100] }}
            transition={{ duration: 0, ease: "easeInOut", loop: Infinity }}
          >
            <Image src={"https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-1.png"} height={350} width={350} />
          </motion.div>
          <h2 className="text-xl sm:px-20 sm:pt-0 pl-7 pt-0">
            Noise Cancellation.
          </h2>
          <h3 className="sm:px-20  pl-7">
            <span className="font-weight text-5xl leading-tight">
              Beats Solo
            </span>
            <br />
            <span className="text-4xl">Wireless Pro.</span>
          </h3>
          <br />
          <div className="sm:px-20 px-8">
            <button className="bg-black text-white rounded-3xl p-2 px-10 py-5 mt-4 leading-7 hover:bg-white hover:text-black">
              Shop By Category
            </button>
          </div>
          <br />
        </div>
        <div className="bg-black h-fit-content  text-white rounded-3xl justify-start ">
          <h2 className="text-xl sm:px-20 sm:pt-12 pl-7 pt-10">Mackbook Pro</h2>
          <h3 className="text-sm sm:px-20 sm:pt-2 pl-7 ">
            <span className="text-4xl sm:text-5xl leading-tight">
              Make Power.
            </span>
            <br />
            <span className="text-4xl">Wakes Instantly.</span>
          </h3>
          <br />
          <div className="sm:px-20 px-8">
            <button className="bg-sky-600 bg-gradient-to-b from-sky-400 via-rose-400 to-lime-400 text-white rounded-3xl p-2 px-10 py-5 mt-4 leading-7 hover:bg-white hover:text-black">
              Shop By Category
            </button>
          </div>
          <br />
          <img src={"https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-22.png"} className="p-0" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 gap-6 mb-5 mx-12 sm:mt-12 sm:w-12/12 ">
        <div className="bg-gray-500 h-fit-content  text-white rounded-3xl justify-start ">
          <h2 className="text-xl sm:px-20 sm:pt-12 pl-7 pt-10">
            Blast Past Fast.
          </h2>
          <h3 className="text-lg sm:px-20 sm:pt-2 pl-7 ">
            <span className="text-4xl sm:text-5xl leading-tight">
              IPhone 12 Pro
            </span>
            <br />
            <span className="text-4xl">It's A Leap Year.</span>
          </h3>
          <div className="sm:px-20 px-8 mb-0">
            <button className="bg-sky-600 text-white rounded-3xl p-2 px-10 py-5 mt-4 leading-7 hover:bg-white hover:text-black">
              Shop By Category
            </button>
          </div>
          <div>
            <img src={"https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-20.png"} />
          </div>
        </div>
        <div className="text-black rounded-3xl grid grid-flow-row ml-4  sm:w-max ">
          <div className="bg-gray-300 rounded-3xl mb-2   flex flex-row justify-between h-96 sm:h-80 sm:w-4/5 w-full ">
            <div>
              <h2 className="text- sm:px-20 sm:pt-10 sm:pl-10 pl-7 pt-10">
                Quadcopter
              </h2>
              <h3 className="sm:mx-2 sm:pt-2 pl-7 ">
                <span className="text-4xl sm:text-5xl ">DJI Mavic Mini</span>
                <br />  
                <span className="text-4xl">Drone FlyCam</span>
              </h3>
              <div className="sm:px-8 px-8 mb-0">
                <button className="bg-white text-black rounded-3xl p-2 px-10 py-5 mt-4 leading-7 hover:bg-black hover:text-white">
                  Shop By Category
                </button> 
              </div>
            </div>
            <div>
              <img src={"https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/drone_PNG204.png"} className="h-96 w-96" />
            </div>
          </div>
          <div className="bg-red-400 rounded-3xl sm:mt-4 flex flex-row justify-between h-96 sm:h-80 sm:w-4/5 w-full ">
            <div>
              <h2 className="text- sm:px-20 sm:pt-10 sm:pl-10 pl-7 pt-10">
                wear gadgets
              </h2>
              <h3 className="sm:mx-2 sm:pt-2 pl-7 ">
                <span className="text-4xl sm:text-5xl ">Wear Gadgets</span>
                <br />  
                <span className="text-4xl">Stay Creative</span>
              </h3>
              <div className="sm:px-8 px-8 mb-0">
                <button className="bg-white text-black rounded-3xl p-2 px-10 py-5 mt-4 leading-7 hover:bg-black hover:text-white">
                  Shop By Category
                </button> 
              </div>
            </div>
            <div>
              <img src={"https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/clay-apple-watch-mockup-07.png"} className="h-80 w-96 mt-10" />
            </div>
          </div>
        
        </div>
        <div className="bg-black h-fit-content  text-white rounded-3xl justify-start sm:w-96 sm:ml-32">
          <h2 className="text-xl sm:px-20 sm:pt-12 pl-7 sm:pl-12  pt-10">
            Earphone
          </h2>
          <h3 className="text-sm sm:px-12 sm:pt-2 pl-7 ">
            <span className="text-4xl sm:text-4xl leading-tight">
              Stay Connect.
            </span>
            <br />
            <span className="text-4xl sm:text-4xl">Stay creative.</span>
          </h3>
          <br />
          <div className="sm:px-20 px-8 sm:pl-12 ">
            <button className="bg-amber-700 text-white rounded-3xl p-2 px-10 py-5 mt-4 leading-7 hover:bg-white hover:text-black">
              Shop By Category
            </button>
          </div>
          <br />
          <img src={"https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10190.png"} className="p-0" />
        </div>
      </div>
    </>
  );
};

export default Hero;
