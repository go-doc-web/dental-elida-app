import React from 'react';
import Image from 'next/image';
import css from './GallaryItem.module.css';

const GallaryItem = ({ title, srcImg }) => {
  return (
    <>
      <div className={css.thumb}>
        <Image src={srcImg} alt={title} width={230} height={164} sizes="100vw" />
      </div>
      <div className={css.titleBlock}>
        <h3 className={css.cardTitle}>{title}</h3>
      </div>
    </>
  );
};

export default GallaryItem;
