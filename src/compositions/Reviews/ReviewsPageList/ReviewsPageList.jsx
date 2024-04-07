'use client';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

import ReviewsList from '@/compositions/Reviews/ReviewsList';
import css from './ReviewsPageList.module.css';
import { getReviews } from '@/api/requests/getReviews';

const ReviewsPageList = () => {
  const reviews = useSelector(state => state.reviews.items);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const verifyReviews = useMemo(() => {
    return reviews.map(item => item?.isisModerated);
  }, [reviews]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getReviews();

        setData(data);
        setLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color={`var(--text-color-accent, #1386c7)`}
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      <ReviewsList items={data} />
    </>
  );
};

export default ReviewsPageList;
