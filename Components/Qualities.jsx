import React from "react";
import { FaShippingFast, FaMoneyBill } from "react-icons/fa";
import {BiSupport} from "react-icons/bi";
import {AiOutlineGift} from "react-icons/ai";

const Qualities = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-0 gap-6 mb-20 sm:mr-16 sm:mt-10">
      <div className="flex items-center mx-12">
        <FaShippingFast className="mr-5 text-5xl" />
        <div>
          <h1 className="font-bold text-2xl">Free Delivery</h1>
          <h2>Free Shipping on all orders</h2>
        </div>
      </div>
      <div className="flex items-center mx-12">
        <BiSupport className="mr-5 text-5xl" />
        <div>
          <h1 className="font-bold text-xl">Online Support 24/7</h1>
          <h2>Support online 24 hours a day</h2>
        </div>
      </div>
      <div className="flex items-center mx-12">
        <FaMoneyBill className="mr-5 text-5xl" />
        <div>
          <h1 className="font-bold text-2xl">Money Return</h1>
          <h2>Back gurantee under 7 days</h2>
        </div>
      </div>
      <div className="flex items-center mx-12">
        <AiOutlineGift className="mr-5 text-5xl" />
        <div>
          <h1 className="font-bold text-2xl">Member Discount</h1>
          <h2>On ever order over $120.00</h2>
        </div>
      </div>
    </div>
  );
};

export default Qualities;