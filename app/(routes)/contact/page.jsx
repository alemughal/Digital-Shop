import React from "react";
import { TiLocation } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-8 py-16">
        <div className="col-span-1 text-blue-800">
          <h1 className="font-bold text-2xl">Contact With Us</h1>
          <br />
          <h1 className="md:text-6xl font-bold text-black ">
            <span>Don't Google</span>
            <br />
            <span className="leading-relaxed">Design Questions</span>
          </h1>
          <p className="text-gray-500">
            Your email address will not be published. Required fields are
            marked*
          </p>
          <br />
          <div className="flex flex-row gap-2 mb-5">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 py-4 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Name*"
              required
            />
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 py-4 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email*"
              required
            />
          </div>
          <textarea
            name=""
            id=""
            rows="10"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            placeholder="Question*"
          ></textarea>
          <br />
          <br />
          <div className="text-center md:text-end md:w-auto w-full ">
            <button className="bg-blue-800 text-white font-bold rounded-3xl p-2 px-12 py-3 mt-4 leading-7 w-80 hover:bg-black hover:text-white">
              Send A Message
            </button>
          </div>
        </div>
        <div className="col-span-1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.8913472017!2d-122.04109805!3d37.40280355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1691491657355!5m2!1sen!2s" className="md:h-full md:w-full h-96 w-full"></iframe>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-40 p-24 ">
        <div className="col-span-1 bg-white ">
          <div className="flex items-center">
            <TiLocation className="text-5xl hover:bg-blue-800 hover:text-white rounded-3xl text-blue-800" />
            <div className="ml-8">
              <h1 className="text-2xl font-bold text-black mb-4">
                Meet Us in Office:
              </h1>
              <p className="text-gray-500">
                <span>Patricia C. 4401 Waldeck Street</span>
                <br />
                <span>Grapevine Nashville, Tx 76051</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-white ">
          <div className="flex items-center">
            <MdEmail className="text-5xl hover:bg-blue-800 hover:text-white rounded-3xl text-blue-800" />
            <div className="ml-8">
              <h1 className="text-2xl font-bold text-black mb-4">
                Our Email Address:
              </h1>
              <p className="text-gray-500">
                <span>info@yourdomain.com</span>
                <br />
                <span>info@yourdomain.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-white ">
          <div className="flex items-center">
            <IoMdCall className="text-5xl hover:bg-blue-800 hover:text-white rounded-3xl text-blue-800" />
            <div className="ml-8">
              <h1 className="text-2xl font-bold text-black mb-4">
                Contact Numbers:
              </h1>
              <p className="text-gray-500">
                <span>+99 (0) 101 0000 888</span>
                <br />
                <span>+99 (0) 555 6759 126</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
