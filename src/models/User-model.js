import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  token: { type: String, default: '' },
  role: { type: Number, default: 1 },
});

const User = models?.User || model('User', UserSchema);

export default User;
