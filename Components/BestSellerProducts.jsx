import EcommerceCard from "../Components/Card";
import React from "react";

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

      
    </>
  );
};

export default BestSellerProducts;
