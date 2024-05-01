/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { api } from '@/api/api';

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

import css from './ReviewsPage.module.css';

const ReviewsPageContent = () => {
  const { isEqualWidth } = useViewportWidth({ expect: 1140 });
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
      const { data } = await api.get(
        `/reviews?status=posted&rating=all&sort=new&page=${currentPage}&limit=${pageSize}`
      );
      console.log('dadat', data.totalReviews);
      console.log('dadat', data);
      setReviews(data.data);
      setTotalReviews(data.totalReviews);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerifyReviewsOnPage(currentPage);
  }, [currentPage]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrentPage(1);
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
          current={currentPage}
          total={totalReviews}
          pageSize={pageSize}
        />
      </div>
    </>
  );
};

export default ReviewsPageContent;
