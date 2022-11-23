import React from "react"
import { graphql } from "gatsby"

import ProductCard from "../components/ProductCard";


const Collection = ({ pageContext }) => {
    const { collection } = pageContext


    return (

        <div id="side-padding" className="flex flex-row flex-wrap justify-between relative">
          {collection.products.map((product)  => (
            <ProductCard key={product.shopifyId} />
          ))}
        </div>
    )
}

export default Collection

export const collectionQuery = graphql`
  {
    allShopifyCollection {
      edges {
        node {
          id
          title
          handle
          products {
            title 
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
            shopifyId
            description
            priceRangeV2 {
              maxVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  }
`;