const jwt = require('jsonwebtoken');
import dbConnect from '@/lib/db-connect';

import User from '@/models/User-model';
import Token from '@/models/Token-model';

export const tokenService = async token => {
  await dbConnect();
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY_TOKEN);

    const userId = decodedToken.userId;
    const tokenRecord = await Token.findOne({ token });

    const userData = await User.findById(userId);

    if (!userData) {
      return { status: 400, logout: true };
    }

    const dtoUser = {
      userName: userData.userName,
      email: userData.email,
      role: userData.role,
    };
    return { status: 200, data: dtoUser };
  } catch (error) {
    console.log(error.message);
    if (error.message === 'invalid token') {
      return { status: 400, error: 'Invalid token' };
    }
    if (error.message === 'jwt expired') {
      console.error('Token expired at:', error.expiredAt);
      return { status: 400, logout: true, error: 'Token expired', expiredAt: error.expiredAt };
    }

    throw new Error('Token failed');
  }
};
