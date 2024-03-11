import React from 'react';
import css from './ReviewsPage.module.css';
import Reviews from '@/compositions/Reviews';

const ReviewsPage = () => {
  return (
    <div className={css.root}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.reviews}>
            <Reviews />
          </div>
          <div className={css.form}>Write a Review</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
