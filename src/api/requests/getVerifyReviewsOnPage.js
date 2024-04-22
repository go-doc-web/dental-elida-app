'use client';
import { api } from '../api';

export const getVerifyReviewsOnPage = async params => {
  try {
    return await api.get('/reviews', { params });
  } catch (error) {
    console.log(error.message);
    throw new Error('Failed to fetch reviews');
  }
};
