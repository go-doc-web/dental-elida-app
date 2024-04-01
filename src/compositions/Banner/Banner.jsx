import React from 'react';
import Image from 'next/image';
import logo from '@/assets/icons/Logo.svg';

import css from './Banner.module.css';

// TODO change className='container'
const Banner = () => {
  return (
    <section className={css.section}>
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
    </section>
  );
};

export default Banner;
