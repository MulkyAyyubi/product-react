import React from "react";
import ProductImages from "./ProductImages";

export const ProductDetail = () => {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 container">
        <ProductImages />
        <div className="bg-blue-300">
          <h1>Converse</h1>
          <p>Walk Star Trainer</p>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
