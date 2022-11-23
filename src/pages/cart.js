import React from "react";

import useStore from "../context/StoreContext";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";
import ProductRow from "../components/ProductRow";
import SecondaryButton from "../components/SecondaryButton";

const Cart = () => {
  const { cart, checkout } = useStore();

  return (
    <LayoutAlt>
      <Seo title="Cart | MagoMade" />
      <div className="page-header flex h-40">
        <h1 className="text-white m-auto text-3xl uppercase">Your cart</h1>
      </div>
      <div id="padding">
        <div className="flex flex-row justify-between w-full gap-8 border-b border-[#aaaaaa] pb-6 mb-12">
          <p className="font-light text-sm w-2/3 sm:w-1/2">Product</p>
          <p className="font-light text-sm w-1/6 sm:w-1/4 text-center">
            Quantity
          </p>
          <p className="font-light text-sm w-1/6 sm:w-1/4 text-right">
            Remove Item
          </p>
        </div>
        {cart.length > 0 ? (
          cart.map((item, index) => <ProductRow key={index} item={item} />)
        ) : (
          <p className="font-semibold text-sm">Your cart is empty.</p>
        )}
        <div className="flex justify-center sm:justify-end border-t border-[#aaaaaa] pt-12 mt-12">
          <SecondaryButton
            text="Checkout"
            onClick={() => window.open(checkout.webUrl)}
            disabled={cart.length === 0}
          />
        </div>
      </div>
    </LayoutAlt>
  );
};

export default Cart;
