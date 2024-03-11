import React from 'react';
import css from './Reviews.module.css';
import Heading from '@/componets/Heading';
import ReviewsList from './ReviewsList';
import Line from '@/componets/Line';

const Reviews = () => {
  return (
    <>
      <Heading className={css.mainHeading} type="h1">
        Reviews
      </Heading>
      <Line className={css.line} />

      {/* <ReviewsList /> */}
    </>
  );
};

export default Reviews;
