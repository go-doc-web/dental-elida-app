import { NextResponse } from 'next/server';
const bcrypt = require('bcrypt');

import dbConnect from '@/lib/db-connect';
import User from '@/models/User-model';

export const registerService = async (email, password, userName) => {
  await dbConnect();
  try {
    const candidate = await User.findOne({ email });
    if (candidate) {
      return { error: true, message: `User with this  already exists`, status: 400 };
    }
    const SALT = 10;
    const hashPassword = await bcrypt.hash(password, SALT);

    const newUser = await User.create({
      userName,
      email,
      password: hashPassword,
      isActive: false,
    });

    return {
      userName: newUser.userName,
      email: newUser.email,
    };
  } catch (error) {
    console.error(error.message);
    throw new Error('Registration failed'); // Re-throw a generic error for handling in POST
  }
};

export default registerService;
