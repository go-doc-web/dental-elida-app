import React from 'react';
import css from './GallaryOfPage.module.css';
import GalaryList from './GalaryList';

const GallaryOfPage = () => {
  return (
    <section className={css.gallary}>
      <div className={'container'}>
        <h2 className={css.visuallyHidden}>Our services</h2>
        <GalaryList />
      </div>
    </section>
  );
};

export default GallaryOfPage;
