import React from "react"
import { graphql } from "gatsby"

import ProductCard from "../components/ProductCard"

const Products = ({ data }) => {
    const { nodes } = data.allShopifyProduct

    return (
      <div>
        {nodes?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
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
      }
    }
  }
`;