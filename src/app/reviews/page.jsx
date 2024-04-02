import React from 'react';
import css from './ReviewsPage.module.css';
import Reviews from '@/compositions/Reviews';
import WriteReviews from '@/compositions/WriteReviews';

const ReviewsPage = () => {
  return (
    <div className={css.root}>
      <div className="container">
        <div className={css.wrapper}>
          <section className={css.reviews}>{<Reviews />}</section>
          <section className={css.formSection}>
            <WriteReviews />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
