import React from "react";

import useStore from "../context/StoreContext";

const ProductRow = ({ item }) => {
  const { removeLineItem } = useStore();
  const { quantity, product } = item;

  return (
    <div id="side-padding" className="grid grid-cols-3 gap-8 items-center">
      <div className="grid grid-cols-2 gap-4 items-center w-96">
        <img className="h-20 w-20 object-cover" src={product.featuredImage.src} alt="{product.altText}" />
        <h4 className="font-semibold text-sm">{product.title}</h4>
      </div>
      <h6>{quantity}</h6>
      <button className="text-sm cursor-pointer text-red"
        onClick={() => removeLineItem(product.variants[0]?.shopifyId)}
      >
        Remove
      </button>
    </div>
  );
};

export default ProductRow;


