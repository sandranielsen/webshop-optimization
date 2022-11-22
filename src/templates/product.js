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
      <div id="side-padding" className="grid grid-cols-2 gap-4 my-12 mb-16">
        <img
          className="w-full object-cover"
          src={product.featuredImage.src}
          alt="{product.altText}"
        />
        <div className="grid h-fit w-full">
          <h4 className="m-0 font-light text-sm">{product.vendor}</h4>
          <h1 className="text-3lg mt-4 mb-8">{product.title}</h1>
          <div className="flex flex-row justify-between items-baseline pb-16">
            <p className="font-light text-lg">
              {product.priceRangeV2.maxVariantPrice.amount} DKK
            </p>
            <div className="flex flex-row gap-8">
              <div className="grid grid-cols-2 w-fit gap-5 items-center">
                <p font-light text-lg>
                  <label htmlFor="qty"></label>
                </p>
                <input
                  className=""
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
          <p className="text-sm font-light">{product.description}</p>
        </div>
      </div>

      <div id="side-padding" className="flex justify-center">
        <h2 className="flex text-4xl justify-center mt-24 mb-16">
          You may also like...
        </h2>
      </div>
      <div
        id="side-padding"
        className="flex flex-row gap-6 overflow-x-scroll snap-mandatory snap-x"
      >
        {nodes?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
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

/* const Input = styled.input`
  border-radius: 20px;
  border: 1px solid rgba(255, 82, 2, 0.5);
  padding: 10px 20px;
  max-width: 80px;
  font-size: 12px;
  :focus {
    outline: none;
    outline-color: #014c40;
  }
`; */
