import { Schema, model, models } from 'mongoose';

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  token: { type: String, required: true, default: null },
});

const Token = models?.Token || model('Token', TokenSchema);
export default Token;
