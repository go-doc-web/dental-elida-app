import { api } from '../api';

export const getReviewsAll = async () => {
  try {
    return await api.get('/reviews');
  } catch (error) {
    console.log(error.message);
    throw new Error('Failed to fetch reviews');
  }
};
export const getReviewsForAside = async params => {
  try {
    return await api.get('/reviews', { params });
  } catch (error) {
    console.log(error.message);
    throw new Error('Failed to fetch reviews');
  }
};

// export const getReviewsAll = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/reviews`, {
//       next: { revalidate: 60 },
//     });

//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error.message);
//     throw new Error('Failed to fetch reviews');
//   }
// };
