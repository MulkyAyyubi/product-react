import React, { useState } from "react";

const images = [
  "/product1.png",
  "/product3.jpg",
  "/product4.jpg",
  "/product5.jpg",
];

const ProductImages = () => {
  const [selected, setSelected] = useState(0);

  console.log("gambar ke = ${selected}");

  return (
    <div className="flex flex-col gap-4 px-24 py-8">
      <img src={images[selected]} alt="gambar produk" className="rounded-lg" />

      <div className="flex gap-4 overflow-x-auto justify-between">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Gambar Product"
            className={`rounded-xl w-32 border-2 ${
              selected === index ? "border-black" : "border-transparent"
            }`}
            onClick={() => setSelected(index)}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default ProductImages;
