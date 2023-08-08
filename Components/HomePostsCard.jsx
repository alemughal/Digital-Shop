import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import PostData from "@/Components/PostData";
import Image from "next/image";

const PostCard = () => {
    const cardDataSlice = PostData.slice(0, 4); 
  return (
    <>
      {cardDataSlice.map((post, index) => (
        <div
          key={post.id}
          className="m-16 border  border-gray-300 w-max p-10 hover:border-black bg-cover hover:bg-[url('data:image/jpeg;base64,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')]  rounded-xl hover:text-white "
        >
          <h3 className="text-lg">{post.date}</h3>
          <h2 className="border-b-4 border-b-indigo-800 pb-10 hover:border-b-white text-2xl leading-8 font-bold tracking-wide">
            <span>{post.title}</span>
            <br />
            <span>{post.title1}</span>
          </h2>
          <br />
          <br />
          <Link href="/post">Read More</Link>
          <BsArrowRight className="inline-block" />
        </div>
      ))}
    </>
  );
};

export default PostCard;
