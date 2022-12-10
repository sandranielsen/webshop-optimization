import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";

const Guides = (props) => {
  const guides = props.data.allMongodbMagomadeBlogGuides.edges;

  return (
    <LayoutAlt>
      <Seo title="Guides" />
      <div className="page-header flex h-40">
        <h3 className="text-white m-auto text-3xl uppercase">Guides</h3>
      </div>
      <div
        id="padding"
        className="flex flex-row flex-wrap justify-between relative"
      >
        {guides
          .slice(0)
          .reverse()
          .map((guide, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center mb-6 sm:mb-24"
            >
              <img
                src={guide.node.bannerUrl}
                alt={guide.node.title}
                width={1200}
                height={160}
                loading="lazy"
                quality={100}
              />
              <h6 className="text-base font-light pt-12 pb-6">
                {guide.node.type}
              </h6>
              <h3 className="text-3xl uppercase pb-12 text-center sm:text-start">
                {guide.node.title}
              </h3>
              <p className="text-base font-light pb-12">
                {guide.node.excerpt + "..."}
              </p>
              <Link
                to={"/guide/" + guide.node.id}
                className="bg-transparent text-[#ff5802] border border-[#ff5802] rounded-full h-10 w-fit flex justify-center items-center px-16 font-light text-xs m-auto cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-[#ff5802] hover:text-white"
              >
                Read more
              </Link>
            </div>
          ))}
      </div>
    </LayoutAlt>
  );
};

export default Guides;

export const guideQuery = graphql`
  query {
    allMongodbMagomadeBlogGuides {
      edges {
        node {
          id
          title
          bannerUrl
          type
          excerpt
        }
      }
    }
  }
`;
