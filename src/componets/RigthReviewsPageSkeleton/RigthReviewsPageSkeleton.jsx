'use client';
import { useEffect, useState } from 'react';
import useViewportWidth from '@/hooks/useViewportWidth';
import ReviewsListSkeleton from '@/componets/ReviewsListSkeleton';
import css from './RigthReviewsPageSkeleton.module.css';

const RigthReviewsPageSkeleton = ({ itemsCount = 0 }) => {
  return (
    <>
      <div className={css.root}>
        <div className={` ${css.placeholderTitle} ${css.skeletonLoader} `}></div>
        <div className={`${css.line} ${css.skeletonLoader}`}></div>

        <ReviewsListSkeleton itemsCount={itemsCount} />
      </div>
    </>
  );
};

export default RigthReviewsPageSkeleton;
