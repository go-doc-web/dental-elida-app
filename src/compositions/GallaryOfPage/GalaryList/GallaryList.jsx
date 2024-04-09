import React from 'react';
import GallaryItem from '../GallaryItem';
import { pages } from '@/config/navMenu';
import css from './GalaryList.module.css';

const GallaryList = () => {
  return (
    <ul className={css.wrapperGallary}>
      {pages.map(({ id, title, src, link }) => (
        <li className={css.card} key={id}>
          <a href={link}>
            <GallaryItem srcImg={src} title={title} />
          </a>
        </li>
      ))}
    </ul>
  );
};
export default GallaryList;
