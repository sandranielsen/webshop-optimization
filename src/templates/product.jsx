import React from "react";
import useStore from "../context/StoreContext";
import useInput from "../utils/useInput";
import { graphql } from "gatsby";

import LayoutAlt from "../components/LayoutAlt";
import SecondaryButton from "../components/SecondaryButton";
import ProductCard from "../components/ProductCard";
import Seo from "../components/seo";
import ImageGallery from "../components/ImageGallery";


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
        className="flex flex-col sm:flex-row gap-8 my-12 sm:mb-16"
      >
        <div className="w-full">
          <img
            className="object-cover w-full"
            src={product.featuredImage.src}
            alt="{product.altText}"
            loading="lazy"
          />

          <div className="grid grid-cols-3 gap-4 mt-12">
            {product.media?.map((media, index) => (
              <div key={index}>
                <ImageGallery media={media} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 h-fit w-fit">
          <h6 className="m-0 font-light text-base">{product.vendor}</h6>
          <h2 className="text-4xl sm:mb-12">{product.title}</h2>
          <div className="flex flex-row justify-between items-center pb-16">
            <h5 className="font-light text-lg sm:text-xl w-1/4 flex flex-start">
              {product.priceRangeV2.maxVariantPrice.amount} DKK
            </h5>
            <div className="flex flex-row sm:gap-4">
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
                className=""
              />
            </div>
          </div>
          <p className="text-base font-light mt-8">{product.description}</p>
        </div>
      </div>

      <div id="side-padding">
        <div className="flex justify-center">
          <h2 className="flex text-3xl sm:text-4xl justify-center mt-12 mb-8 sm:mt-24 sm:mb-16">
            You may also like...
          </h2>
        </div>
        <div
          id="bottom-padding"
          className="flex flex-row gap-6 overflow-x-scroll snap-mandatory snap-x"
        >
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


