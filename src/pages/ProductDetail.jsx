import React from "react";
import ProductImages from "./ProductImages";
import ProductInfo from "../components/ProductInfo";

export const ProductDetail = () => {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 container">
        <ProductImages />
        <ProductInfo />
        </div>
      </div>
  );
};

export default ProductDetail;
