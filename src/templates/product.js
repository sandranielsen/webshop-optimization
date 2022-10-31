import React from "react";

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductTemplate;
