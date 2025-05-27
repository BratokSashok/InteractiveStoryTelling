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



// import { DataTypes, Model, Optional } from 'sequelize';
// import { sequelize } from '../../../sequilize';
// import { Tags } from '../../tags/model/Tags';
// import { User } from '../../user/model/User';

// export interface StoriesData {
//   id: number;
//   name: string;
//   description: string;
//   count: number;
//   user_id: number;
//   tag_id: number;
// }
// export type StoriesCreationAttributes = Optional<StoriesData, 'id'>;

// export const Stories = sequelize.define<Model< StoriesCreationAttributes, StoriesData>>('stories', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING(200),
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING(500),
//     allowNull: false,
//   },
//   count: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   tag_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// }, {
//   tableName: 'stories',
//   timestamps: false,
// });

// // Связи: один пользователь может иметь много историй
// User.hasMany(Stories, { foreignKey: 'user_id' });
// Stories.belongsTo(User, { foreignKey: 'user_id' });

// // Связи: один тег может иметь много историй
// Tags.hasMany(Stories, { foreignKey: 'tag_id' });
// Stories.belongsTo(Tags, { foreignKey: 'tag_id' });