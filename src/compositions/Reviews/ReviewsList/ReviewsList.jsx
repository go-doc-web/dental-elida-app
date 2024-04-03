import React from 'react';

import Rating from '@/componets/Rating';
import Line from '@/componets/Line';
import formattedDate from '@/helpers/formatedDate';

import css from './ReviewsList.module.css';

const ReviewsList = ({ items }) => {
  return (
    <>
      <ul className={css.list}>
        {items &&
          items.map(({ _id: id, text, userName, lastName, rating, createdAt }) => {
            return (
              <li className={css.listItem} key={id}>
                <h2 className={css.itemHeading}>{`${userName} ${lastName ? lastName : ''}`}</h2>
                <span className={css.date}>{formattedDate(createdAt)}</span>
                <Rating value={rating} />
                <p className={css.itemText}>{`"${text}"`}</p>
                <Line className={css.line} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ReviewsList;
