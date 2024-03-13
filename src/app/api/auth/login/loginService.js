const bcrypt = require('bcrypt');
import dbConnect from '@/lib/db-connect';
import User from '@/models/User-model';

export const loginService = async (email, password) => {
  await dbConnect();
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { error: true, message: 'Error authorization', status: 401 };
    }

    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      return { error: true, message: 'Error authorization', status: 401 };
    }

    user.isActivated = true;
    await user.save();

    return { userName: user.userName, email: user.email, isActivated: user.isActivated };
  } catch (error) {
    console.log(error);
    throw new Error('Login failed');
  }
};
