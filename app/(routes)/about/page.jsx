import React from "react";
import Head from "next/head";
import About from "@/Assests/about.png";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:mx-10 sm:mt-10 sm:gap-0 md:mb-20 mb-20">
        <div className="md:mt-2 sm:mb-8 mb-8 md:mb-0 md:w-3/4 tracking-wide">
          <h2 className="font-bold text-blue-800 text-xl">Welcome To Phlox</h2>
          <br />
          <h1 className="font-bold text-4xl">Who We Are ?</h1>
          <br />
          <p className="opacity-90">
            <span>
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper surface of the impenetrable foliage
              of my trees, and but a few stray
            </span>
            <br />
            <br />
            <span>
              gleams steal into the inner sanctuary, I throw myself down among
              the tall grass by the trickling stream; and, as I lie close to the
              earth, a thousand unknown plants are noticed by me .
            </span>
            <br />
            <br />
            <span>
              when I hear the buzz of the little world among the stalks, and
              grow familiar with the countless indescribable forms of the
              insects and flies, then I feel the presence .
            </span>
          </p>
          <br />
          <button className="bg-blue-800 text-white rounded-3xl p-2 px-12 py-3 mt-4 leading-7 hover:bg-black hover:text-white">
            Contact Us
          </button>
        </div>
        <div>
          <img src={"https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png"} alt="Picture of the author"  className="rounded-3xl"/>
        </div>
      </div>
    </>
  );
};

export default about;
