import React from 'react';

import ReviewsPageList from '@/compositions/Reviews/ReviewsPageList/ReviewsPageList';

import Heading from '@/componets/Heading';
import Line from '@/componets/Line';
import { useSelector } from 'react-redux';
import css from './LateralReviews.module.css';

const LateralReviews = () => {
  const reviews = useSelector(state => state.reviews.items);

  let viewAllButton;
  if (reviews.length > 6) {
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
      <ReviewsPageList filteredReviewsSlice />
      {viewAllButton}
    </section>
  );
};

export default LateralReviews;
