import React from 'react';
import Link from 'next/link';

import ReviewsPageList from '@/compositions/Reviews/ReviewsPageList/ReviewsPageList';

import Heading from '@/componets/Heading';
import Line from '@/componets/Line';

import css from './LateralReviews.module.css';

const LateralReviews = () => {
  return (
    <section className={css.section}>
      <Heading type="h2" className={css.sectionTitle}>
        Verified Reviews
      </Heading>
      <Line className={css.line} />
      <ReviewsPageList />
      <a className={css.viewsAllLink} href="/reviews">
        View all
      </a>
    </section>
  );
};

export default LateralReviews;
