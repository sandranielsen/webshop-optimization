import React from "react";
import { graphql } from "gatsby";

import useStore from "../context/StoreContext";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";
import ProductRow from "../components/ProductRow";
import ProductCard from "../components/ProductCard";


const Cart = ({ data }) => {
  const { cart } = useStore();
  const { nodes } = data.allShopifyProduct;

  return (
    <LayoutAlt>
      <Seo title="Cart | MagoMade" />
      <div className="page-header flex h-40">
        <h1 className="text-white m-auto text-3xl uppercase">Your cart</h1>
      </div>
      <div id="padding">
        {cart.length > 0 ? (
          cart.map((item, index) => <ProductRow key={index} item={item} />)
        ) : (
          <div className="flex flex-col gap-8 text-center my-8 text-[#111111]">
            <p className="font-semibold text-4xl">Your cart is empty</p>
            <a
              href="/products"
              className="bg-transparent text-[#ff5802] border border-[#ff5802] rounded-full h-10 w-fit flex justify-center items-center px-16 font-light text-xs m-auto cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-[#ff5802] hover:text-white "
            >
              Continue shopping
            </a>
          </div>
        )}

        <div className="flex flex-row gap-6 overflow-x-scroll snap-mandatory snap-x pt-24">
          {nodes?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </LayoutAlt>
  );
};

export default Cart;

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
