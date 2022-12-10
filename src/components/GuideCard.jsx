import React from 'react'
import { Link } from "gatsby";

const GuideCard = ({guide}) => {
    
    return (
      <div className="flex flex-row h-full justify-between text-center sm:text-start relative">
        <div className=" hidden sm:block sm:w-1/2 ">
          <img
            src={guide.node.imgUrl}
            alt={guide.node.title}
            width={600}
            height={600}
            loading="lazy"
            quality={100}
            className="h-[32rem] w-full sm:object-cover"
          />
        </div>
        <div className="guide-container flex flex-col gap-8 justify-center p-16 text-white w-full sm:w-1/2 h-[32rem]">
          <h6 className="text-base font-light">{guide.node.type}</h6>
          <h3 className="text-2xl sm:text-3xl uppercase">{guide.node.title}</h3>
          <Link
            to={"/guide/" + guide.node.id}
            className="bg-transparent text-white border border-white rounded-full h-10 w-fit flex justify-center items-center mx-auto sm:mx-0 px-16 font-light text-xs cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-white hover:text-[#111111]"
          >
            Read more
          </Link>
        </div>
      </div>
    );

}

export default GuideCard;

