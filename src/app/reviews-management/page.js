'use client';

// TODO Heading center
// TODO Select font-size ? (разобраться как стилизовать селект)
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import Heading from '@/componets/Heading';
import StatusSelect from '@/componets/StatusSelect';
import SortSelect from '@/componets/SortSelect';
import RatingSelect from '@/componets/RatingSelect';
import ReviewsListAdmin from '@/compositions/ReviewsListAdmin';

import css from './reviews-management.module.css';

function ReviewsManagement() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem('active');
    if (!key) {
      router.push('/login');
    }

    setIsLoggedIn(key);
  }, [router]); // eslint-disable-line react-hooks/exhaustive-deps

  // if (!isLoggedIn) {
  //   return <h1>You are not authorized to access this page.</h1>;
  // }

  return (
    <>
      {!isLoggedIn && <h1>You are not authorized to access this page.</h1>}
      {isLoggedIn && (
        // TODO сделать компонентом Filter

        <section className={css.reviewsSection}>
          <div className="container">
            <div className={css.filter}>
              <Heading type={'h1'} className={css.titlePage}>
                Reviews
              </Heading>
              <div className={css.wrapperSelectBlock}>
                <div className={css.wrapperSelect}>
                  <span className={css.label}>Status</span>
                  <StatusSelect />
                </div>
                <div className={css.wrapperSelect}>
                  <span className={css.label}>Rating</span>
                  <RatingSelect />
                </div>
                <div className={css.wrapperSelect}>
                  <span className={css.label}>Sort by</span>
                  <SortSelect />
                </div>
              </div>
            </div>
            <ReviewsListAdmin />
          </div>
        </section>
      )}
    </>
  );
}

export default ReviewsManagement;
