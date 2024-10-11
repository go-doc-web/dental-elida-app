'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/icons/Logo.svg';
import removeDashInTelNumber from '@/helpers';

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
                <a href={`tel:${removeDashInTelNumber(constans.numberTel)}`}>
                  <span className={css.tel}>{constans.numberTel}</span>
                </a>
                <a href={constans.location.addressLink} target="_blank" className={css.address}>
                  {constans.location.address}
                </a>
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
