'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    
    get formattedDate() {
      return this.date.toISOString().split('T')[0];
    }

    static associate(models) {
      
      Order.belongsTo(models.User, { foreignKey: 'UserId' });
      
      Order.belongsTo(models.Service, { foreignKey: 'ServiceId' });
    }
  }
  Order.init({
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    totalPrice: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    ServiceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};