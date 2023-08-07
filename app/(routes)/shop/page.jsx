import React from "react";

const Shop = () => {
  return (
    <div className="grid md:grid-cols-5 md:gap-6 px-8 py-16">
      <div className="col-span-1 text-black">
        <h1 className="font-bold text-2xl">Search</h1>
        <br />
        <div>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 py-4 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Products..."
            required
          />
        </div>
        <button className="bg-blue-800 text-white rounded-3xl p-2 px-12 py-3 mt-4 leading-7 w-full hover:bg-black hover:text-white">
          Search
        </button>
        <br />
        <br />
        <br />
        <h1 className="font-bold text-2xl">Categories</h1>
        <br />
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="Bags" className="flex items-center mt-2 ">
              <input
                type="checkbox"
                id="Bags"
                name="Bags"
                value="Bags"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Accessories</span>
              <span className="text-gray-500 ml-auto">(3)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Camera & audio</span>
              <span className="text-gray-500 ml-auto">(2)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Car & Industrial</span>
              <span className="text-gray-500 ml-auto">(3)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Headphones</span>
              <span className="text-gray-500 ml-auto">(4)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Laptops</span>
              <span className="text-gray-500 ml-auto">(5)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Smart Home</span>
              <span className="text-gray-500 ml-auto">(5)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">SmartPhones</span>
              <span className="text-gray-500 ml-auto">(6)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">TV And Display</span>
              <span className="text-gray-500 ml-auto">(4)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Uncategorized</span>
              <span className="text-gray-500 ml-auto">(0)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Watches & Eyewear</span>
              <span className="text-gray-500 ml-auto">(4)</span>
            </label>
            <br />
            <br />
          </div>
        </div>
        <h1 className="font-bold text-2xl">Brand</h1>
        <br />
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="Bags" className="flex items-center mt-2 ">
              <input
                type="checkbox"
                id="Bags"
                name="Bags"
                value="Bags"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Accessories</span>
              <span className="text-gray-500 ml-auto">(3)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Camera & audio</span>
              <span className="text-gray-500 ml-auto">(2)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Car & Industrial</span>
              <span className="text-gray-500 ml-auto">(3)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Headphones</span>
              <span className="text-gray-500 ml-auto">(4)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Laptops</span>
              <span className="text-gray-500 ml-auto">(5)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Smart Home</span>
              <span className="text-gray-500 ml-auto">(5)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">SmartPhones</span>
              <span className="text-gray-500 ml-auto">(6)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">TV And Display</span>
              <span className="text-gray-500 ml-auto">(4)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Uncategorized</span>
              <span className="text-gray-500 ml-auto">(0)</span>
            </label>
            <label htmlFor="Shoes" className="flex items-center mt-2">
              <input
                type="checkbox"
                id="Shoes"
                name="Shoes"
                value="Shoes"
                className="mr-2 ml-2 h-6 w-6"
              />
              <span className="ml-2">Watches & Eyewear</span>
              <span className="text-gray-500 ml-auto">(4)</span>
            </label>
            <br />
            <br />
            <br />
            
            {/* Add more categories with their respective numbers */}
          </div>
        </div>
      </div>
      <div className="md:col-span-4 sm:col-span-2 col-span-1 w-full bg-black">
        <h1>Shop</h1>
      </div>
    </div>
  );
};

export default Shop;