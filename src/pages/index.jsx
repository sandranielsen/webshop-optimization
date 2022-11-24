import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";


import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  const { nodes } = data.allShopifyProduct;

  return (
    <Layout>
      <Seo title="Home | MagoMade" />
      <Hero />
      <div id="side-padding">
        <h2 className="flex text-4xl justify-center mt-24 mb-16">Patterns</h2>
        <div className="flex flex-row gap-6 overflow-x-scroll snap-mandatory snap-x">
          {nodes?.map((product, index) => (
            <ProductCard key={index} product={product} />
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
  }
`;

