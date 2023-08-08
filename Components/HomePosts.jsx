import React from "react";
import HomePostsCard from "@/Components/HomePostsCard";

const Posts = () => {
  return (
    <>
      <div className="items- text-center">
        <h1 className="font-bold text-5xl">Latest Posts</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-0 gap-6 mb-5 sm:mr-16 sm:mt-10">
        <HomePostsCard />
      </div>
    </>
  );
};

export default Posts;
