import Heading from '@/componets/Heading';
import React from 'react';
import css from './WriteReviews.module.css';
import Line from '@/componets/Line';
import FormAddReviews from '../FormAddReviews';

const WriteReviews = () => {
  return (
    <>
      <Heading type={'h2'} className={css.titleSection}>
        Write a Review
      </Heading>
      <Line className={css.line} />
      <FormAddReviews />
    </>
  );
};

export default WriteReviews;
