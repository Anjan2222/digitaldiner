const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Order = sequelize.define('Order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cart: { type: DataTypes.JSONB, allowNull: false },
});

Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = Order;
