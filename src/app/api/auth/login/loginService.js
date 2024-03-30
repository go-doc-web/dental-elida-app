const bcrypt = require('bcrypt');
import { v4 as uuidv4 } from 'uuid';
const jwt = require('jsonwebtoken');
import dbConnect from '@/lib/db-connect';
import User from '@/models/User-model';
import Token from '@/models/Token-model';

// бекенд
// postAuth - приймає 2 параметра login password
// якщо знайшов такого користувача та валідний пароль
// генеруємо любий ключ та записуємо його цьому узеру у базу
// в ідеалі ще запускаємо таймер який через 30 хв видалить токен з бази

// getUserProfile - очикує 1 агрумент token  по якому виконує пошук у базі

// якщо знайщов користувача з таким токен то повертаємо userData  якщо ні 400 logout true

export const loginService = async (email, password) => {
  await dbConnect();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return { message: 'User not found', status: 401 };
    }
    if (!user.password) {
      return { message: 'User not found', status: 401 };
    }

    const tokenID = uuidv4();

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return { status: 401, message: 'Invalid credentials - Невірний логін або пароль' };
    }

    const existingToken = await Token.findOne({ user: user._id });

    if (existingToken) {
      await Token.deleteOne({ user: user._id });
    }

    const token = jwt.sign({ userId: user._id, tokenID: tokenID }, process.env.SECRET_KEY_TOKEN, {
      expiresIn: '1m',
    });

    const newToken = new Token({ user: user._id, token: token });

    await newToken.save();

    return { status: 200, token: token };
  } catch (error) {
    // console.log(error);
    throw new Error('Login failed');
  }
};
