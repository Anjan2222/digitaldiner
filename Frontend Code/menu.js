import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = ({ onAddToCart }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('/api/menu')
      .then(res => setMenuItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
