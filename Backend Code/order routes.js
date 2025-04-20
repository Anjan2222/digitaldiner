const express = require('express');
const { User, Order } = require('../models/order');

const router = express.Router();

// Place a new order
router.post('/', async (req, res) => {
  try {
    const { name, phone, cart } = req.body;

    let user = await User.findOne({ where: { phone } });
    if (!user) {
      user = await User.create({ name, phone });
    }

    const order = await Order.create({ userId: user.id, cart });
    res.status(201).json({ message: 'Order placed', order });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get orders by phone number
router.get('/:phone', async (req, res) => {
  try {
    const user = await User.findOne({ where: { phone: req.params.phone } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const orders = await Order.findAll({ where: { userId: user.id } });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
