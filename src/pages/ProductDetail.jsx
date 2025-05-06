import React from "react";
import ProductImages from "./ProductImages";

export const ProductDetail = () => {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 container">
        <ProductImages />
        <div className= "my-8 max-w-md flex flex-col justify-center">
          <h1 className="font-inter text-lg font-bold text-gray-500 tracking-widest pb-5">CONVERSE</h1>
          <p className="font-inter text-6xl font-bold pb-5">Walk Star Trainer</p>
          <p className="font-inter text-gray-500 text-lg pb-5">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <p className="text-2xl font-bold">Rp799.000 <span className="line-through font-normal">Rp999.000</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
