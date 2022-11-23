import React from "react";

import useStore from "../context/StoreContext";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";
import ProductRow from "../components/ProductRow";
import PrimaryButton from "../components/PrimaryButton";

const Cart = () => {
  const { cart, checkout } = useStore();

  return (
    <LayoutAlt>
      <Seo title="Cart | MagoMade" />
      <div className="page-header flex h-40 mb-16">
        <h1 className="text-white m-auto text-3xl uppercase">Your cart</h1>
      </div>
      <div id="side-padding">
        <div className="grid grid-cols-3 gap-8">
          <p className="font-semibold text-sm">Product</p>
          <p className="font-semibold text-sm">Quantity</p>
          <p className="font-semibold text-sm">Remove Item</p>
        </div>
        {cart.length > 0 ? (
          cart.map((item, index) => <ProductRow key={index} item={item} />)
        ) : (
          <p className="font-semibold text-sm">Your cart is empty.</p>
        )}
        <div className="flex justify-end">
          <PrimaryButton
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
