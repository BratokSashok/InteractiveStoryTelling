
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequilize';

export const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
  price: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  discount_price: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  tableName: 'products',
  timestamps: false,
});