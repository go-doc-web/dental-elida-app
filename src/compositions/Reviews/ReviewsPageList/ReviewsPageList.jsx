'use client';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormAddReviews from '@/compositions/FormAddReviews';
import ReviewsList from '@/compositions/Reviews/ReviewsList';
import { getReviewsAll, getReviewsForAside } from '@/api/requests/getReviews';

import css from './ReviewsPageList.module.css';

const ReviewsPageList = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.items);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const verifyReviews = useMemo(() => {
    return reviews.filter(item => item?.isModerated === true);
  }, [reviews]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getReviewsAll();

        dispatch({ type: 'SET_REVIEWS', payload: data.data });
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
  if (verifyReviews.length === 0) {
    return (
      <>
        <p className={css.noReviews}>No Reviews...</p>
        <FormAddReviews />
      </>
    );
  }
  return <ReviewsList items={verifyReviews} loading={loading} />;
};

export default ReviewsPageList;
