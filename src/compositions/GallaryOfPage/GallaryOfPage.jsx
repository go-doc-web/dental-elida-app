import React from 'react';
import css from './GallaryOfPage.module.css';
import GalaryList from './GalaryList';

const GallaryOfPage = () => {
  return (
    <section className={css.gallary}>
      <h1 className={css.visuallyHidden}>Elida Dental Group</h1>
      <h2 className={css.visuallyHidden}>Our services</h2>
      <GalaryList />
    </section>
  );
};

export default GallaryOfPage;
