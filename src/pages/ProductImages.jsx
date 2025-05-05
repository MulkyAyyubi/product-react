import React from "react";

export const ProductImages = () => {
  return (
    <div className="flex flex-col gap-4 px-24 py-8">
      <img src="/product1.png" alt="gambar produk" className="rounded-lg" />

      <div className="flex gap-4 overflow-x-auto justify-between">
        <img
          src="/product1.png"
          alt="gambar produk"
          className="rounded-lg w-32"
        />
        <img
          src="/product3.jpg"
          alt="gambar produk"
          className="rounded-lg w-32"
        />
        <img
          src="/product4.jpg"
          alt="gambar produk"
          className="rounded-lg w-32"
        />
        <img
          src="/product5.jpg"
          alt="gambar produk"
          className="rounded-lg w-32"
        />
      </div>
    </div>
  );
};

export default ProductImages;
