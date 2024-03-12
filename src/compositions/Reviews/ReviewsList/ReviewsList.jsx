import React from 'react';
import Rating from '@/componets/Rating';
import Line from '@/componets/Line';

import css from './ReviewsList.module.css';

import formattedDate from '@/helpers/formatedDate';
import next from 'next';
const getReviews = async () => {
  try {
    const res = await fetch(`${process.env.API_HOST}/reviews`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const ReviewsList = async () => {
  const data = await getReviews();

  return (
    <ul className={css.list}>
      {data &&
        data.map(({ _id: id, text, userName, lastName, rating, createdAt }) => {
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
  );
};

export default ReviewsList;
