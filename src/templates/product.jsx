import React from "react";
import useStore from "../context/StoreContext";
import useInput from "../utils/useInput";
import { graphql } from "gatsby";

import LayoutAlt from "../components/LayoutAlt";
import SecondaryButton from "../components/SecondaryButton";
import ProductCard from "../components/ProductCard";
import Seo from "../components/seo";


const ProductTemplate = ({ pageContext, data }) => {
  const { product } = pageContext;
  const { addVariantToCart } = useStore();
  const bind = useInput(1);
  const { nodes } = data.allShopifyProduct;


  return (
    <LayoutAlt>
      <Seo title={product.title} />
      <div
        id="side-padding"
        className="flex flex-col sm:flex-row gap-8 my-12 mb-16"
      >
        <img
          className="w-full sm:w-1/2 object-cover"
          src={product.featuredImage.src}
          alt="{product.altText}"
        />

        <div className="flex flex-col gap-8 h-fit w-fit">
          <h4 className="m-0 font-light text-base">{product.vendor}</h4>
          <h1 className="text-4xl mb-12">{product.title}</h1>
          <div className="flex flex-row justify-between sm:items-center pb-16">
            <p className="font-light text-xl w-1/4 flex flex-start">
              {product.priceRangeV2.maxVariantPrice.amount} DKK
            </p>
            <div className="flex flex-row gap-4">
              <div className="flex flex-end items-center">
                  <input
                    className="border rounded-full border-[#ff5802] w-24 font-light text-xs cursor-pointer"
                    placeholder="1"
                    id="qty"
                    type="number"
                    {...bind}
                  />
              </div>
              <SecondaryButton
                text="Add to cart"
                onClick={() => addVariantToCart(product, bind.value)}
              />
            </div>
          </div>
          <p className="text-base font-light mt-8">{product.description}</p>
        </div>
      </div>

      <div id="side-padding">
        <div className="flex justify-center">
          <h2 className="flex text-4xl justify-center mt-24 mb-16">
            You may also like...
          </h2>
        </div>
        <div className="flex flex-row gap-6 overflow-x-scroll snap-mandatory snap-x">
          {nodes?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </LayoutAlt>
  );
};

export default ProductTemplate;


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


