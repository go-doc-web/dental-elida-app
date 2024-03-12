import React from 'react';
import css from './FormAddReviews.module.css';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// TODO add counter symbol textarea

/**
 *
 * @param {*} FormData
 */

const createReviews = async FormData => {
  'use server';

  const { userName, lastName, text, rating } = Object.fromEntries(FormData);
  console.log(userName, lastName, text, rating);

  const response = await fetch(`${process.env.API_HOST}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName, lastName, text, rating }),
  });

  const reviews = await response.json();
  revalidatePath('/reviews');
  redirect(`${process.env.CLIENT_URL}/reviews`);
};

const FormAddReviews = () => {
  return (
    <form className={css.form} action={createReviews}>
      <div className={css.wrapperInput}>
        <label htmlFor="userName" className={css.label}>
          <span className={css.spanLabel}>*</span>Full Name
        </label>
        <input
          className={css.input}
          type="text"
          name="userName"
          id="userName"
          placeholder="Type here"
          required
        />
      </div>
      <div className={css.wrapperInput}>
        <label htmlFor="lastName" className={css.label}>
          <span className={css.spanLabel}>*</span>Last Name
        </label>
        <input
          className={css.input}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Type here"
          required
        />
      </div>
      <div className={css.wrapperInput}>
        <label htmlFor="" className={css.label}>
          <span className={css.spanLabel}>*</span>Lave a comment
        </label>
        <textarea
          className={`${css.input} ${css.textarea}`}
          type="text"
          placeholder="Type here"
          name="text"
          maxLength="255"
          required
        />
      </div>
      <div className={css.wrapperInput}>
        <label htmlFor="" className={css.label}>
          <span className={css.spanLabel}>*</span>Rate us
        </label>
        <select name="rating" className={css.select} defaultValue="defaultOption" required>
          <option className={css.selectPlaceholder} hidden disabled value="defaultOption">
            Choose here...
          </option>
          <option className={css.option} value="1">
            1 Star
          </option>
          <option className={css.option} value="2">
            2 Stars
          </option>
          <option className={css.option} value="3">
            3 Stars
          </option>
          <option className={css.option} value="4">
            4 Stars
          </option>
          <option className={css.option} value="5">
            5 Stars
          </option>
        </select>
      </div>
      <button className={css.button} type={'submit'}>
        Leave Review
      </button>
    </form>
  );
};

export default FormAddReviews;
