import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import GuideCard from "../components/GuideCard";
import Hero from "../components/Hero";


import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  const { nodes } = data.allShopifyProduct;
    const guides = data.allMongodbMagomadeBlogGuides.edges;


  return (
    <Layout>
      <Seo title="Home | MagoMade" />
      <Hero />
      <div id="side-padding" className="my-24">
        <h2 className="flex text-4xl justify-center mb-16">Patterns</h2>
        <div className="flex flex-row gap-6 overflow-x-scroll snap-mandatory snap-x">
          {nodes?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {guides.map((guide, index) => ( 
          <GuideCard
            key={index}
            guide={guide}
            className="flex flex-col justify-center items-center mb-24"
          />
        ))}
        </div>
    </Layout>
  );};

export default IndexPage;


export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        title
        handle
        variants {
          shopifyId
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        description
        featuredImage {
          src
          altText
        }
        vendor
        media {
          preview {
            image {
              src
              altText
            }
          }
        }
      }
    }

    allMongodbMagomadeBlogGuides {
      edges {
        node {
          id
          title
          imgUrl
        }
      }
    }
  }
`;

