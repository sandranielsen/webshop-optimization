import React from 'react'
import { Link } from "gatsby";

const GuideCard = ({guide}) => {
    
    return (
      <div
        className="flex flex-row flex-wrap justify-between relative"
      >
        
            <img src={guide.node.imgUrl} alt={guide.node.title} />
            <h2 className="text-3xl uppercase py-12">{guide.node.title}</h2>
            <Link
              to={"/guide/" + guide.node.id}
              className="bg-transparent text-[#ff5802] border border-[#ff5802] rounded-full h-10 w-fit flex justify-center items-center px-16 font-light text-xs m-auto cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-[#ff5802] hover:text-white"
            >
              Read more
            </Link>
          </div>

    );

}

export default GuideCard;

