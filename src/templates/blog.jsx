import React from "react";
import { graphql } from "gatsby";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";

const BlogTemplate = ({ pageContext }) => {
  // const { collection } = pageContext;

  return (
    <LayoutAlt>
      <Seo title="MagoMade" />
      <div className="page-header flex h-40">
        <h1 className="text-white m-auto text-3xl uppercase">
          
        </h1>
      </div>
      <div
        id="padding"
        className="flex flex-row flex-wrap justify-between relative"
      ></div>
    </LayoutAlt>
  );
};

// export const query = graphql`
//   {
//     allShopifyBlog {
//       edges {
//         node {
//           id
//           title
//           url
//         }
//       }
//     }
//   }
// `;
