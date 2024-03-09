import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/icons/Logo.svg';

import css from './Banner.module.css';

const Banner = () => {
  return (
    <section className={css.section}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={css.thumb}>
          <Image
            src={Logo}
            alt={'Logo'}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
