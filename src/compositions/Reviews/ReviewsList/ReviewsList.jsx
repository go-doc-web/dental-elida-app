import React from 'react';
import Rating from '@/componets/Rating';
import Line from '@/componets/Line';

import css from './ReviewsList.module.css';

import formattedDate from '@/helpers/formatedDate';
const getReviews = async () => {
  try {
    const res = await fetch(`${process.env.API_HOST}/reviews`, { next: { revalidate: 15 } });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
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
      {data.map(({ _id: id, body, userName, secondName, rating, createdAt }) => {
        return (
          <li className={css.listItem} key={id}>
            <h2 className={css.itemHeading}>{`${userName} ${secondName ? secondName : ''}`}</h2>
            <span className={css.date}>{formattedDate(createdAt)}</span>
            <Rating value={rating} />
            <p className={css.itemText}>{`"${body}"`}</p>
            <Line className={css.line} />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
