import React from 'react';
import GallaryItem from '../GallaryItem';
import { pages } from '@/config/navMenu';
import css from './GalaryList.module.css';
import Link from 'next/link';

const GallaryList = () => {
  return (
    <ul className={css.wrapperGallary}>
      {pages.map(({ id, title, src, link }) => (
        <li className={css.card} key={id}>
          <Link href={link}>
            <GallaryItem srcImg={src} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default GallaryList;
