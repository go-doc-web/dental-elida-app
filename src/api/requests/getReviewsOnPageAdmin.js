'use client';
import { api } from '../api';

export const getVerifyReviewsOnPage = async ({ status, rating, sort, page, limit }) => {
  try {
    return await api.get(
      `/reviews?status=${status}&rating=${rating}&sort=${sort}&page=${page}&limit=${limit}`
    );
  } catch (error) {
    console.log(error.message);
    throw new Error('Failed to fetch reviews');
  }
};
