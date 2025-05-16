import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../../sequilize';

export interface TagsAttributes {
  id: number;
  name: string;
}

// Поля, которые не обязательны(id создаётся автоматически)
export type TagCreationAttributes = Optional<TagsAttributes, 'id'>;

export const Tags = sequelize.define<Model<TagsAttributes, TagCreationAttributes>>('tags', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  tableName: 'users',
  timestamps: false,
});


