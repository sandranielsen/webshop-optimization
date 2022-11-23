import React from "react";

import useStore from "../context/StoreContext";

const ProductRow = ({ item }) => {
  const { removeLineItem } = useStore();
  const { quantity, product } = item;

  return (
    <div className="flex flex-row gap-8 items-start mb-6">
      <div className="flex flex-row gap-4 sm:gap-8 items-start w-2/3 sm:w-1/2">
        <img
          className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
          src={product.featuredImage.src}
          alt="{product.altText}"
        />
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-sm sm:text-base">
            {product.title}
          </h4>
          <p className="font-light text-xs sm:text-sm">
            {product.priceRangeV2.maxVariantPrice.amount} DKK
          </p>
        </div>
      </div>
      <h6 className="w-1/6 sm:w-1/4 text-center">{quantity}</h6>
      <button
        className="text-sm cursor-pointer w-1/6 sm:w-1/4 text-right"
        onClick={() => removeLineItem(product.variants[0]?.shopifyId)}
      >
        Remove
      </button>
    </div>
  );
};

export default ProductRow;


