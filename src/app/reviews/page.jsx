'use client';

import React, { useState, useEffect } from 'react';

import { Pagination } from 'antd';
import ReviewsList from '@/compositions/Reviews/ReviewsList';
import ReviewsListSkeleton from '@/componets/ReviewsListSkeleton';
import { getVerifyReviewsOnPage } from '@/api/requests/getVerifyReviewsOnPage';
import { paramReq } from '@/config/reviewsPage';
import css from './ReviewsPage.module.css';

const { limit } = paramReq();
//TODO Обработать Error
const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalReviews: 0,
  });

  const fetchVerifyReviewsOnPage = async page => {
    try {
      setLoading(true);
      const { data } = await getVerifyReviewsOnPage(paramReq(page));
      setReviews(data.data);
      setPagination({
        currentPage: data.page,
        totalPages: data.totalPages,
        totalReviews: data.totalReviews,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerifyReviewsOnPage(1); // Получение первой страницы изначально
  }, []);

  const handlePageChange = page => {
    fetchVerifyReviewsOnPage(page);
  };

  const handlePageSizeChange = (current, pageSize) => {
    // Обработка изменения размера страницы при необходимости
    console.log(current, pageSize);
  };

  return (
    <>
      {loading && <ReviewsListSkeleton itemsCount={10} />}
      <div className={css.wrapper}>
        <section className={css.reviews}>{!loading && <ReviewsList items={reviews} />}</section>
        <section>
          <Pagination
            showSizeChanger
            onShowSizeChange={handlePageSizeChange}
            onChange={handlePageChange}
            current={pagination.currentPage}
            total={pagination.totalReviews}
            pageSize={limit}
          />
        </section>
      </div>
    </>
  );
};

export default ReviewsPage;
