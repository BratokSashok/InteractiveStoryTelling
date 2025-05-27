import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../shared/db/sequelize";

export interface StoriesData {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  category?: string;
  tags?: string;
}

export type StoriesCreationAttributes = Optional<StoriesData, 'id'>;

export const Stories = sequelize.define<Model<StoriesData, StoriesCreationAttributes>>('stories', {
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
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
}, {
  tableName: 'stories',
  timestamps: false,
});
