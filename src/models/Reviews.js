import { Schema, model, models } from 'mongoose';

const reviewSchema = new Schema(
  {
    userName: { type: String, required: true },
    lastName: { type: String },
    rating: { type: Number, required: true },
    text: { type: String, required: true },
    isModerated: { type: String, default: false }, //  - для отзывов, ожидающих проверки
  },
  { timestamps: true }
);
const Review = models?.Review || model('Review', reviewSchema);

export default Review;
