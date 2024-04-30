'use client';

import React, { useState, useEffect } from 'react';

import { Pagination } from 'antd';
import ReviewsList from '@/compositions/Reviews/ReviewsList';
import FixedBtnReviews from '@/compositions/Reviews/FixedBtnReviews';
import ReviewsListSkeleton from '@/componets/ReviewsListSkeleton';
import Modal from '@/compositions/Modal';
import FormAddReviews from '@/compositions/FormAddReviews';
import Line from '@/componets/Line';
import { getVerifyReviewsOnPage } from '@/api/requests/getVerifyReviewsOnPage';
import useViewportWidth from '@/hooks/useViewportWidth';
import { paramReq } from '@/config/reviewsPage';
import css from './ReviewsPage.module.css';

const { limit } = paramReq();

const ReviewsPageContent = () => {
  const { isEqualWidth } = useViewportWidth({ expect: 1140 });
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalReviews: 0,
  });

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('modalOpen');
  };
  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('modalOpen');
  };

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
      {showModal && (
        <Modal title={'Write a Review'} closeModal={closeModal}>
          <FormAddReviews closeModal={closeModal} showModal={showModal} />
        </Modal>
      )}
      {!showModal && <FixedBtnReviews onClick={openModal} />}
      {loading && <ReviewsListSkeleton itemsCount={10} />}
      {!loading && <ReviewsList items={reviews} />}
      <div className={css.wrapperPagination}>
        <Pagination
          showSizeChanger
          onShowSizeChange={handlePageSizeChange}
          onChange={handlePageChange}
          current={pagination.currentPage}
          total={pagination.totalReviews}
          pageSize={limit}
        />
      </div>
    </>
  );
};

export default ReviewsPageContent;
