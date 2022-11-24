import React from "react";
import { navigate } from "gatsby-link";

const BlogCard = ({ blog }) => {

  return (
    <div className="grid justify-center items-center w-80 top-0 gap-4 cursor-pointer relative">

      <div
        role="button"
        tabIndex={0}
        className="w-80 h-[28rem]"
        onClick={() => navigate(`/blog/${blog.handle}`)}
        onKeyDown={() => navigate(`/blog/${blog.handle}`)}
      >
        <div className="absolute flex justify-between flex-row py-4 px-0 w-80 text-[#111111]">
          <h2 className="font-semibold m-0 w-32 leading-8">{blog.title}</h2>
          <div className="relative flex flex-col text-right">
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
