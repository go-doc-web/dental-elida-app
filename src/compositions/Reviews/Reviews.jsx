'use client';
import { useState } from 'react';
import { Pagination } from 'antd';

import Heading from '@/componets/Heading';
import ReviewsPageList from '@/compositions/Reviews/ReviewsPageList/ReviewsPageList';
import FixedBtnReviews from '@/compositions/Reviews/FixedBtnReviews';
import Line from '@/componets/Line';
import useViewportWidth from '@/hooks/useViewportWidth';

import css from './Reviews.module.css';

// const onShowSizeChange = (current, pageSize) => {
//   console.log(current, pageSize);
// };

const Reviews = () => {
  const { isEqualWidth } = useViewportWidth({ expect: 1140 });
  const [isOpen, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };
  return (
    <>
      {isOpen && <p>Modal open</p>}
      {!isOpen && (
        <>
          <Heading className={css.mainHeading} type="h1">
            Verified Reviews
          </Heading>
          <Line className={css.line} />
          <ReviewsPageList />
        </>
      )}

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
      {isEqualWidth && !isOpen && <FixedBtnReviews onClick={open} />}
    </>
  );
};

export default Reviews;
