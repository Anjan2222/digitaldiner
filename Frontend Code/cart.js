import React from 'react';

const Cart = ({ cart, onRemoveFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => onRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
