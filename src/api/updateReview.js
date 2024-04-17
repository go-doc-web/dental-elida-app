import { api } from './api';

export const updateReview = async ({ _id, isModerated }) => {
  try {
    const response = await api.put('/reviews', {
      _id,
      isModerated,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
