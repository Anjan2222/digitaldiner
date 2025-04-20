import React, { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  return (
    <div>
      <h1>The Digital Diner</h1>
      <Menu onAddToCart={addToCart} />
      <Cart cart={cart} onRemoveFromCart={removeFromCart} />
      <OrderForm cart={cart} onOrderPlaced={clearCart} />
    </div>
  );
};

export default App;
