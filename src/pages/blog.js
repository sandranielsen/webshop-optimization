import * as React from "react";
// import { graphql } from "gatsby"
// import BlogCard from "../components/BlogCard";

 import LayoutAlt from "../components/LayoutAlt";
 import Seo from "../components/seo";

const Blog = ({ data }) => {
  // const { nodes } = data.allShopifyBlog

  return (
    <LayoutAlt>
      <Seo title="Guides" />

      <div>
        <div className="page-header flex h-40 mb-16">
          <h2 className="text-white m-auto text-3xl uppercase">Guides</h2>
        </div>
      </div>
      <div>
        {/* {nodes?.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))} */}
      </div>
    </LayoutAlt>
  );
}

export default Blog;

// export const query = graphql` {
//       allShopifyBlog {
//         edges {
//           node {
//             title
//           }
//         }
//     }
//   }
// `;