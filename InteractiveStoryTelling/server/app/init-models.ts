import { Review } from "../models/Reviews";
import { User } from "../models/User";

export const initModels = () => {
  // Здесь настраиваем связи между моделями, если нужно

  User.hasMany(Review, { foreignKey: 'user_id' });
  Review.belongsTo(User, { foreignKey: 'user_id' });

  return {
    Review,
    User,
  };
};