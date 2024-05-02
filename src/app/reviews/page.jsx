'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Line from '@/componets/Line';
import ReviewsPageContent from './ReviewsPageContent';
import css from './ReviewsPage.module.css';
//TODO Обработать Error

const ReviewsPage = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isActive = localStorage.getItem('isActive');

    if (!isActive) {
      return;
    }
    setIsActive(true);
  }, []);
  return (
    <>
      <div className={css.wrapper}>
        <section className={css.reviews}>
          <h1 className={css.reviewsTitle}>
            Verified <Link href={isActive ? '/reviews-management' : '/login'}>R</Link>
            eviews
          </h1>
          <Line className={css.line} />
          <ReviewsPageContent />
        </section>
      </div>
    </>
  );
};

export default ReviewsPage;
