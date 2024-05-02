'use client';

import { api } from '@/api/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Pagination } from 'antd';

// TODO Heading center
// TODO Select font-size ? (разобраться как стилизовать селект)
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Heading from '@/componets/Heading';
import ReviewsListSkeleton from '@/componets/ReviewsListSkeleton';
import StatusSelect from '@/componets/StatusSelect';
import SortSelect from '@/componets/SortSelect';
import RatingSelect from '@/componets/RatingSelect';
import ReviewsListAdmin from '@/compositions/ReviewsListAdmin';

import css from './reviews-management.module.css';

function ReviewsManagement() {
  const dispatch = useDispatch();
  const router = useRouter();
  const loading = useSelector(state => state.loadingReviews.loading);
  const { status, rating, sort } = useSelector(state => state.filtersAdmin);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalReviews, setTotalReviews] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [loading, setLoading] = useState(false);

  const handleChangeStatus = value => {
    dispatch({ type: 'SET_STATUS', payload: { status: value } });
  };
  const handleChangeRating = value => {
    dispatch({ type: 'SET_RATING', payload: { rating: value } });
  };
  const handleChangeSort = value => {
    dispatch({ type: 'SET_SORT', payload: { sort: value } });
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  useEffect(() => {
    const key = localStorage.getItem('isActive');
    if (!key) {
      router.push('/login');
    }
    console.log('key', key);

    setIsLoggedIn(key);
  }, [router, setIsLoggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    try {
      dispatch({ type: 'SET_LOADING', payload: { loading: true } });
      const fetchReviews = async () => {
        const data = await api.get(
          `/reviews?status=${status}&rating=${rating}&sort=${sort}&page=${currentPage}&limit=${pageSize}`
        );
        if (!data) {
          console.log('Error');
        }

        if (data.status === 200) {
          dispatch({ type: 'SET_REVIEWS', payload: data.data.data });

          setTotalReviews(data.data.totalReviews);
        }
        if (data.data.status === 404) {
          Notify.info(data.data.message);
        }
      };
      fetchReviews();
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: { loading: false } });
    }
  }, [currentPage, dispatch, pageSize, rating, sort, status]);

  return (
    <>
      {isLoggedIn ? (
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

          <div className={css.wrapperList}>
            {loading ? <ReviewsListSkeleton count={10} /> : <ReviewsListAdmin />}
          </div>

          {!loading && (
            <div className={css.wrapperPagination}>
              <Pagination
                showSizeChanger
                onShowSizeChange={handlePageSizeChange}
                onChange={handlePageChange}
                current={currentPage}
                total={totalReviews}
                pageSize={pageSize}
              />
            </div>
          )}
        </section>
      ) : (
        <h1>You are not authorized to access this page.</h1>
      )}
    </>
  );
}

export default ReviewsManagement;
