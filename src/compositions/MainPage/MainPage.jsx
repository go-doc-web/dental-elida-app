'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { memberAria } from '@/constants/routes';
import SideBar from '@/componets/SideBar';
import LateralReviews from '@/compositions/LateralReviews/LateralReviews';
import WriteReviews from '@/compositions/WriteReviews';
import css from './Mainpage.module.css';

function MainPage({ children }) {
  const path = usePathname();
  const router = useRouter();

  const isPrivateLocation = memberAria.includes(path);

  const [height, setHeight] = useState(0);
  const [leftLoaded, setLeftLoaded] = useState(false); // Состояние для отслеживания загрузки left

  const reviewsPage = path === '/reviews';
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (leftRef.current) {
        setHeight(leftRef.current.offsetHeight);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [path, router]);

  useEffect(() => {
    if (rightRef.current) {
      rightRef.current.style.height = `${height}px`;
    }
  }, [height]);

  useEffect(() => {
    // Установка состояния leftLoaded в true при монтировании leftRef
    if (leftRef.current) {
      setLeftLoaded(true);
    }
  }, []);

  return (
    <>
      {isPrivateLocation ? (
        <div className="container">{children}</div>
      ) : (
        <div className="container">
          <div className={css.main}>
            <div className={css.left} ref={leftRef}>
              {children}
            </div>
            <div className={css.right} ref={rightRef}>
              {/* Проверяем, загружен ли left, прежде чем рендерить right */}
              {leftLoaded && (
                <>
                  {!reviewsPage && <LateralReviews />}
                  {reviewsPage && <WriteReviews />}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainPage;
