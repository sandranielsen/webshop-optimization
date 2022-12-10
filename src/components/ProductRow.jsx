import React from "react";

import useStore from "../context/StoreContext";
import SecondaryButton from "./SecondaryButton";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";


const ProductRow = ({ item }) => {
  const { removeLineItem } = useStore();
  const { quantity, product } = item;
  const { cart, checkout } = useStore();


  return (
    <>
      <div className="flex flex-row justify-between w-full gap-8 border-b border-[#aaaaaa] pb-6 mb-12">
        <p className="font-light text-sm w-2/3 sm:w-1/2">Product</p>
        <p className="font-light text-sm w-1/6 sm:w-1/4 text-center">
          Quantity
        </p>
        <p className="font-light text-sm w-1/6 sm:w-1/4 text-right">Total</p>
      </div>

      <div className="flex flex-row gap-8 items-start mb-6">
        <div className="flex flex-row gap-4 sm:gap-8 items-start w-2/3 sm:w-1/2">
          <button
            className="text-sm cursor-pointer flex my-auto"
            onClick={() => removeLineItem(product.variants[0]?.shopifyId)}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <img
            className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
            src={product.featuredImage.src}
            alt="{product.altText}"
            width={150}
            height={150}
            loading="lazy"
          />

          <div className="flex flex-col gap-4">
            <h6 className="font-semibold text-sm sm:text-base">
              {product.title}
            </h6>
            <p className="font-light text-xs sm:text-sm">{product.vendor}</p>
          </div>
        </div>

        <h6 className="w-1/6 sm:w-1/4 text-center">{quantity}</h6>
        <h6 className="w-1/6 sm:w-1/4 font-light text-xs sm:text-sm text-right">
          {product.priceRangeV2.maxVariantPrice.amount} DKK
        </h6>
      </div>

      <div className="flex justify-center sm:justify-end border-t border-[#aaaaaa] pt-12 mt-12">
        <SecondaryButton
          text="Checkout"
          onClick={() => window.open(checkout.webUrl)}
          disabled={cart.length === 0}
        />
      </div>
    </>
  );
};

export default ProductRow;


