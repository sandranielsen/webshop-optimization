import React from "react"
import { graphql } from "gatsby"

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";
import ProductCard from "../components/ProductCard"


const Products = ({ data }) => {
  const { nodes } = data.allShopifyProduct
  

    return (
      <LayoutAlt>
        <Seo title="Products" />
        <div className="page-header flex h-40">
          <h3 className="text-white m-auto text-3xl uppercase">Products</h3>
        </div>

        <div id="padding" className="flex flex-row flex-wrap justify-between relative">
          {nodes?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </LayoutAlt>
    );
}

export default Products

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


