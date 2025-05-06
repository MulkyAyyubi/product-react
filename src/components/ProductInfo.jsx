import React from "react";

export const ProductInfo = () => {
  return (
    <div className="my-8 max-w-md flex flex-col justify-center">
      <h1 className="font-inter text-lg font-bold text-gray-500 tracking-widest pb-5">
        CONVERSE
      </h1>
      <p className="font-inter text-6xl font-bold pb-5">Walk Star Trainer</p>
      <p className="font-inter text-gray-500 text-lg pb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <p className="text-2xl font-bold">
        Rp799.000 <span className="line-through font-normal">Rp999.000</span>
      </p>
      <div className="flex gap-4 pt-12">
        <button className="bg-gray-200 w-10 h-10 rounded-lg text-orange-400 font-bold">
          -
        </button>
        <button className="bg-gray-200 w-10 h-10 rounded-lg text-black">
          1
        </button>
        <button className="bg-gray-200 w-10 h-10 rounded-lg text-orange-400 font-bold">
          +
        </button>
        <button className="bg-orange-400 w-30 h-10 rounded-md text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
