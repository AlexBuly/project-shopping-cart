import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, count) => {
    if (count > 0) {
      setCartItems(prev => {
        const existing = prev.find(item => item.id === product.id);
        if (existing) {
          // update quantity
          return prev.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + count }
            : item
          );
        }
        return [...prev, { ...product, quantity: count }];
      });
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <main>
        <Outlet context={{ cartItems, addToCart, removeFromCart }} />
      </main>
    </>
  );
}

export default App;