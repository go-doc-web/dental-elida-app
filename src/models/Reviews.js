import { Schema, model, models } from 'mongoose';

const reviewSchema = new Schema(
  {
    userName: { type: String },
    lastName: { type: String },
    rating: { type: Number },
    text: { type: String },
    isModeration: { type: String, default: false }, //  - для отзывов, ожидающих проверки
  },
  { timestamps: true }
);
const Review = models?.Review || model('Review', reviewSchema);

export default Review;
