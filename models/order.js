"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer);
      Order.belongsTo(models.Menu);
    }
  }
  Order.init(
    {
      MenuId: DataTypes.INTEGER,
      CustomerId: DataTypes.INTEGER,
      status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
