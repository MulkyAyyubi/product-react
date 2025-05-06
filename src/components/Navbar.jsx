import React from "react";

export const Navbar = ({ cartQty }) => {
  return (
    <nav className="flex px-8 justify-between py-6 shadow-lg sticky top-0 bg-white z-50">
      <h1 className="font-archivo text-xl font-bold">sneakers</h1>

      <div className="relative">
        <img src="/cart.svg" alt="cart icon" />
        <h1 className="w-6 h-6 bg-red-400 items-center flex justify-center rounded-full text-white absolute -top-4 -right-4">
          {cartQty}
        </h1>
      </div>
    </nav>
  );
};
