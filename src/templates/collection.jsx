import React from "react"
import { graphql } from "gatsby"

import LayoutAlt from "../components/LayoutAlt";
import ProductCard from "../components/ProductCard";
import Seo from "../components/seo";


const Collection = ({ pageContext }) => {
  const { collection, productCount } = pageContext

    return (
      <LayoutAlt>
        <Seo title={collection.title + " | MagoMade"} />
        <div className="page-header flex h-40">
          <h1 className="text-white m-auto text-3xl uppercase">
            {collection.title}
          </h1>
        </div>
        <div
          id="padding"
          className="flex flex-row flex-wrap justify-between relative"
        >
          {collection.products?.map((product, index) => (
            <div>
              <ProductCard key={collection.index} product={product} />
            </div>
          ))}
        </div>
      </LayoutAlt>
    );
}

export default Collection

export const query = graphql`
  {
    allShopifyCollection(sort: { fields: [title] }) {
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