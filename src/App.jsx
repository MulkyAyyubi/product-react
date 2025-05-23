import { useState } from "react";
import { Navbar } from "./components/navbar";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  const [cartQty, setCartQty] = useState(0)

  const onAddToCart = () => {
    setCartQty(cartQty + 1);
  };

  console.log(cartQty);

  return (
    <div>
      <Navbar cartQty={cartQty} />
      <ProductDetail onAddToCart={onAddToCart}/>
    </div>
  );
}

export default App;