import React from 'react';
import { Pagination } from 'antd';
import css from './Reviews.module.css';
import Heading from '@/componets/Heading';
import ReviewsList from './ReviewsList';
import Line from '@/componets/Line';

const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

const Reviews = () => {
  return (
    <>
      <Heading className={css.mainHeading} type="h1">
        Reviews
      </Heading>
      <Line className={css.line} />
      <ReviewsList />
      <div className={css.pagination}>
        <Pagination
          showSizeChanger
          // onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
      </div>
    </>
  );
};

export default Reviews;
