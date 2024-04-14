import React from 'react';
import css from './ReviewsListSkeleton.module.css';

const ReviewsListSkeleton = ({ itemsCount }) => {
  return (
    <ul className={css.list}>
      {Array.from({ length: 10 }, (_, index) => (
        <li className={css.listItem} key={index}>
          <div className={`${css.placeholderHeading} ${css.skeletonLoader}`}></div>
          <div className={`${css.placeholderDate} ${css.skeletonLoader}`}></div>
          <div className={`${css.placeholderRating} ${css.skeletonLoader}`}></div>
          <div className={`${css.placeholderText} ${css.skeletonLoader}`}></div>
          <div className={`${css.placeholderLine} ${css.skeletonLoader}`}></div>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsListSkeleton;
