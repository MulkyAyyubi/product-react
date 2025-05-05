import React from "react";
import ProductImages from "./ProductImages";

export const ProductDetail = () => {
  return (
    <div className="bg-yellow-300 flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 container">
        <ProductImages />
        <div className="bg-blue-300">
          <h1>Product info</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
