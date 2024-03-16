import { api } from './api';

export const getReviewsAll = () => {
  return api.get('/reviews');
};
