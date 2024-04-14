'use client';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReviewsList from '@/compositions/Reviews/ReviewsList';
import css from './ReviewsPageList.module.css';
import { getReviews } from '@/api/requests/getReviews';

const ReviewsPageList = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.items);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const verifyReviews = useMemo(() => {
    return reviews.map(item => item?.isisModerated);
  }, [reviews]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getReviews();
        dispatch({ type: 'SET_REVIEWS', payload: data });
        // setData(data);
      } catch (error) {
        setError(error.message); // Обработка ошибки
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, setLoading]);

  // TODO Реализовать нрм лоадер

  return <ReviewsList items={reviews} loading={loading} />;
};

export default ReviewsPageList;
