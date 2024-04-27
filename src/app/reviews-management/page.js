'use client';
import { api } from '@/api/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// TODO Heading center
// TODO Select font-size ? (разобраться как стилизовать селект)
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Heading from '@/componets/Heading';

import StatusSelect from '@/componets/StatusSelect';
import SortSelect from '@/componets/SortSelect';
import RatingSelect from '@/componets/RatingSelect';
import ReviewsListAdmin from '@/compositions/ReviewsListAdmin';

import css from './reviews-management.module.css';

function ReviewsManagement() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [status, setStatus] = useState('all');
  const [rating, setRating] = useState('all');
  const [sort, setSort] = useState('new');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChangeStatus = value => {
    console.log(`selected ${value}`);
    setStatus(value);
  };
  const handleChangeRating = value => {
    setRating(value);
    console.log(`selected ${value}`);
  };
  const handleChangeSort = value => {
    setSort(value);
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await api.get(`/reviews?status=${status}&rating=${rating}&sort=${sort}`);
        // if (!data) {
        //   console.log('Error');
        // }

        dispatch({ type: 'SET_REVIEWS', payload: data.data });
      } catch (error) {}
    };
    fetchReviews();
  }, [dispatch, rating, sort, status]);

  useEffect(() => {
    try {
      const fetchReviews = async () => {
        const data = await api.get(`/reviews?status=${status}&rating=${rating}&sort=${sort}`);
        console.log(data);
        if (data.status === 200) {
          dispatch({ type: 'SET_REVIEWS', payload: data.data.data });
        }
        if (data.data.status === 404) {
          Notify.info(data.data.message);
        }
      };
      fetchReviews();
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, rating, sort, status]);

  useEffect(() => {
    const key = localStorage.getItem('isActive');
    if (!key) {
      router.push('/login');
    }

    setIsLoggedIn(key);
  }, [router]); // eslint-disable-line react-hooks/exhaustive-deps

  // if (!isLoggedIn) {
  //   return <h1>You are not authorized to access this page.</h1>;
  // }

  return (
    <>
      {!isLoggedIn && <h1>You are not authorized to access this page.</h1>}
      {isLoggedIn && (
        // TODO сделать компонентом Filter

        <section className={css.reviewsSection}>
          <div className={css.filter}>
            <Heading type={'h1'} className={css.titlePage}>
              Reviews
            </Heading>
            <div className={css.wrapperSelectBlock}>
              <div className={css.wrapperSelect}>
                <span className={css.label}>Status</span>
                <StatusSelect handleChange={handleChangeStatus} />
              </div>
              <div className={css.wrapperSelect}>
                <span className={css.label}>Rating</span>
                <RatingSelect handleChange={handleChangeRating} />
              </div>
              <div className={css.wrapperSelect}>
                <span className={css.label}>Sort by</span>
                <SortSelect handleChange={handleChangeSort} />
              </div>
            </div>
          </div>

          <ReviewsListAdmin />
        </section>
      )}
    </>
  );
}

export default ReviewsManagement;
