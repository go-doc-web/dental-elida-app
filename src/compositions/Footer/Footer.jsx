import React from 'react';
import Image from 'next/image';
import logo from '@/assets/icons/Logo.svg';
import Container from '../../componets/Container';
import css from './Footer.module.css';

import { constans } from '@/constants/const.header';

// TODO Rewrite it to the composition

const Footer = () => {
  return (
    <div className={css.root}>
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
    </div>
  );
};

export default Footer;
