'use client';
import { useState, useMemo } from 'react';
import { Suspense } from 'react';
import { Pagination } from 'antd';

import Heading from '@/componets/Heading';
import ReviewsPageList from '@/compositions/Reviews/ReviewsPageList/ReviewsPageList';
import FixedBtnReviews from '@/compositions/Reviews/FixedBtnReviews';
import Line from '@/componets/Line';
import Modal from '@/compositions/Modal';
import FormAddReviews from '@/compositions/FormAddReviews';
import RigthReviewsPageSkeleton from '@/componets/RigthReviewsPageSkeleton';
import useViewportWidth from '@/hooks/useViewportWidth';

import css from './Reviews.module.css';

// const onShowSizeChange = (current, pageSize) => {
//   console.log(current, pageSize);
// };

const Reviews = () => {
  const { isEqualWidth } = useViewportWidth({ expect: 1140 });
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('modalOpen');
  };
  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('modalOpen');
  };

  return (
    <>
      {showModal && (
        <Modal title={'Write a Review'} closeModal={closeModal}>
          <FormAddReviews />
        </Modal>
      )}
      <Suspense fallback={<RigthReviewsPageSkeleton itemsCount={10} />}>
        <div className={css.wrapper}>
          <Heading className={css.mainHeading} type="h1">
            Verified Reviews
          </Heading>
          <Line className={css.line} />
          {!showModal && <FixedBtnReviews onClick={openModal} />}
          <ReviewsPageList />

          {!isEqualWidth && (
            <div className={css.pagination}>
              <Pagination
                //   showSizeChanger
                // onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
              />
            </div>
          )}
        </div>
      </Suspense>
    </>
  );
};

export default Reviews;
