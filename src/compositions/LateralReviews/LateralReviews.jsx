import React from 'react';

import ReviewsPageList from '@/compositions/Reviews/ReviewsPageList/ReviewsPageList';

import Heading from '@/componets/Heading';
import Line from '@/componets/Line';
import { useSelector } from 'react-redux';
import css from './LateralReviews.module.css';

const LateralReviews = () => {
  const reviews = useSelector(state => state.reviews.items);
  const filteredReviews = reviews.filter(review => review.isModerated === true);

  let viewAllButton = '';

  if (filteredReviews.length > 6) {
    viewAllButton = (
      <a className={css.viewsAllLink} href="/reviews">
        View all
      </a>
    );
  }
  return (
    <section className={css.section}>
      <Heading type="h2" className={css.sectionTitle}>
        Verified Reviews
      </Heading>
      <Line className={css.line} />
      <ReviewsPageList />
      {viewAllButton}
    </section>
  );
};

export default LateralReviews;
