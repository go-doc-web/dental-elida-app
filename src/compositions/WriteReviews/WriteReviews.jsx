import Heading from '@/componets/Heading';
import React from 'react';
import css from './WriteReviews.module.css';
import Line from '@/componets/Line';
import FormAddReviews from '../FormAddReviews';

const WriteReviews = () => {
  return (
    <>
      <section className={css.section}>
        <Heading type={'h2'} className={css.titleSection}>
          Write a Review
        </Heading>
        <Line className={css.line} />
        <FormAddReviews />
      </section>
    </>
  );
};

export default WriteReviews;
