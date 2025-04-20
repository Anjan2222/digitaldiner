const express = require('express');
const MenuItem = require('../models/menuItem');

const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
