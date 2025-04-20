import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ cart, onOrderPlaced }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const placeOrder = () => {
    axios.post('/api/orders', { name, phone, cart })
      .then(res => {
        alert('Order placed successfully!');
        onOrderPlaced();
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Place Order</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <button onClick={placeOrder}>Submit Order</button>
    </div>
  );
};

export default OrderForm;
