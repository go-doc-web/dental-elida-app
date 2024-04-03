import React from 'react';
import css from './LateralReviews.module.css';
import ReviewsPageList from '@/compositions/Reviews/ReviewsPageList/ReviewsPageList';

import Heading from '@/componets/Heading';
import Line from '@/componets/Line';

const LateralReviews = () => {
  return (
    <section className={css.section}>
      <Heading type="h2" className={css.sectionTitle}>
        Verified Reviews
      </Heading>
      <Line className={css.line} />
      <ReviewsPageList />
    </section>
  );
};

export default LateralReviews;
