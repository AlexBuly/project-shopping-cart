import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
   const [cartItems, setCartItems] = useState([]);

   const addToCart = (product, count) => {
    if (count > 0) {
      setCartItems(prev => [...prev, { ...product, quantity: count }]);
    }
  };
  return (
    <>
      <Navbar cartCount={cartItems.length}/>
      <main>
        <Outlet context={{cartItems, addToCart}} />
      </main>

    </>
  )
}

export default App
