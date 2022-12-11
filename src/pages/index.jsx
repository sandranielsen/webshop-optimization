import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import ProductSlider from "../components/ProductSlider";
import GuideCard from "../components/GuideCard";
import Hero from "../components/Hero";


import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  const { nodes } = data.allShopifyProduct;
    const guides = data.allMongodbMagomadeBlogGuides.edges;


  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <div id="side-padding" className="mt-12 mb-6 sm:mt-24 sm:mb-12">
        <h2 className="flex text-4xl justify-center mb-16">Patterns</h2>
        <div className="flex flex-row gap-6 overflow-x-scroll overflow-y-hidden snap-mandatory snap-x">
          {nodes?.map((product, index) => (
            <ProductSlider key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="slider">
        <div className="slides">
          {guides.map((guide, index) => (
            <GuideCard key={index} guide={guide} />
          ))}
        </div>
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
          type
        }
      }
    }
  }
`;

