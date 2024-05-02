'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/icons/Logo.svg';

import css from './Footer.module.css';

import { constans } from '@/constants/const.header';

// TODO Rewrite it to the composition

const Footer = () => {
  // TODO Сделать хук
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showFooter && (
        <footer className={css.footer}>
          <div className="container">
            <div className={css.wrapper}>
              <div className={css.wrapperAddress}>
                <span className={css.tel}>{constans.numberTel}</span>
                <span className={css.address}>{constans.location}</span>
              </div>

              <div className={css.thumb}>
                <Image
                  src={logo}
                  alt={'logo'}
                  width={300}
                  height={200}
                  className={css.logo}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
