'use client';
import { useEffect, useState } from 'react';

import ReviewsList from '@/compositions/Reviews/ReviewsList';
import css from './ReviewsPageList.module.css';
import { getReviews } from '@/api/requests/getReviews';

const ReviewsPageList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews();
        console.log(data);
        setData(data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return <ReviewsList items={data} />;
};

export default ReviewsPageList;
