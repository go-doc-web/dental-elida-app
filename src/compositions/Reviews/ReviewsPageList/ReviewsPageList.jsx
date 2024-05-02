'use client';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsListSkeleton from '@/componets/ReviewsListSkeleton';
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
    const reviewsFiltered = reviews.filter(item => item?.isModerated === true);
    return reviewsFiltered.slice(0, 10);
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

  // TODO Реализовать нрм лоаде
  if (loading) {
    return <ReviewsListSkeleton itemsCount={10} />;
  }
  if (!loading && verifyReviews.length > 0) {
    return <ReviewsList items={verifyReviews} loading={loading} />;
  }
  if (!loading && verifyReviews.length === 0) {
    return (
      <>
        <p className={css.noReviews}>No Reviews...</p>
        <FormAddReviews />
      </>
    );
  }

  // return <ReviewsList items={verifyReviews} loading={loading} />;
};
export default ReviewsPageList;
