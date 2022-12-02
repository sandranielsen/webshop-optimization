import React from "react"
import { graphql } from "gatsby"

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";
import ProductListItem from "../components/ProductListItem";


const CollectionTemplate = ({ pageContext }) => {
  const { collection } = pageContext

    return (
      <LayoutAlt>
        <Seo title={collection.title} />
        <div className="page-header flex h-40">
          <h3 className="text-white m-auto text-3xl uppercase">
            {collection.title}
          </h3>
        </div>
        <div
          id="padding"
          className="flex flex-row flex-wrap justify-between relative"
        >
          {collection.products?.map((product, index) => (
            <div
              key={index}
            >
              <ProductListItem product={product} />
            </div>
          ))}
        </div>
      </LayoutAlt>
    );
}

export default CollectionTemplate

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
            handle
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
            variants {
              shopifyId
            }
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