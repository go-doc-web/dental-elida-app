'use client';
import { usePathname, useRouter } from 'next/navigation';
import { memberAria } from '@/constants/routes';
import SideBar from '@/componets/SideBar';
import ReviewsList from '@/compositions/Reviews/ReviewsList';
import LateralReviews from '@/compositions/LateralReviews';
import css from './Mainpage.module.css';

import React from 'react';

function MainPage({ children }) {
  const path = usePathname();
  const isPrivateLocation = memberAria.includes(path);
  const reviewsPage = path === '/reviews';

  return (
    <>
      <div className="container">
        {isPrivateLocation ? (
          children
        ) : (
          <div className={css.main}>
            <div className={css.left}>{children}</div>
            <div className={css.rigth}>
              <SideBar>{!reviewsPage && <LateralReviews />}</SideBar>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MainPage;
