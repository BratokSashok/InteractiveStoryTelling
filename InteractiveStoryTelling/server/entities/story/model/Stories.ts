
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../sequilize';
import { Tags } from '../../tags/model/Tags';
import { User } from '../../user/model/User';

export interface StoriesData {
  id: number;
  name: string;
  description: string;
  count: number;
  user_id: number;
  tag_id: number;
}

export const Stories = sequelize.define<Model<StoriesData>>('stories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'stories',
  timestamps: false,
});

// Связь: один пользователь может иметь много отзывов
User.hasMany(Stories, { foreignKey: 'user_id' });
Stories.belongsTo(User, { foreignKey: 'user_id' });
Tags.hasMany(Stories, { foreignKey: 'user_id' });
Stories.hasMany(Tags, { foreignKey: 'user_id' });


