import dbConnect from '@/lib/db-connect';
import Review from '@/models/Reviews';

export const checkRatingExistence = async rating => {
  await dbConnect();
  const count = await Review.countDocuments({ rating });
  return count !== 0;
};
