import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../../sequilize';
// import { sequelize } from '../../../shared/db/sequelize';

export interface UserAttributes {
  id: number;
  email: string;
  username: string;
  password: string;
}

// Поля, которые не обязательны(id создаётся автоматически)
export type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export const User = sequelize.define<Model<UserAttributes, UserCreationAttributes>>('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false,
});
