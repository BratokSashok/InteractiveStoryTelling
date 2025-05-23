
import bcrypt from 'bcrypt';
import { User } from '../../../entities/user/model/User';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const registrationService = {
  async register({ name, email, password }: RegisterData) {
    // Проверка, существует ли пользователь с таким email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Хэшируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Сохраняем пользователя
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return {
      id: newUser.get('id'),
      name: newUser.get('name'),
      email: newUser.get('email'),
    };
  }
};