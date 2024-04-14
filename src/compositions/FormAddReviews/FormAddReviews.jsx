'use client';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './FormAddReviews.module.css';

const FormAddReviews = ({ closeModal, showModal }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: '',
    lastName: '',
    text: '',
    rating: 'defaultOption',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add review');
      }

      // Reset form after successful submission
      setFormData({
        userName: '',
        lastName: '',
        text: '',
        rating: 'defaultOption',
      });

      if (showModal) {
        closeModal();
      }
      // TODO Сделать свой дизайн нотифай
      // dispatch({
      //   type: 'SET_APP_NOTIFIER',
      //   payload: { key: 'success', message: 'The Reviews send on moderation' },
      // });
      Notify.success('Thank you! Your review has been sent for moderation');

      // Redirect to reviews page or handle navigation as per your routing setup
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.wrapperInput}>
        <label htmlFor="userName" className={css.label}>
          <span className={css.spanLabel}>*</span>First Name
        </label>
        <input
          className={css.input}
          type="text"
          name="userName"
          id="userName"
          placeholder="Type here"
          value={formData.userName}
          onChange={handleChange}
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
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.wrapperInput}>
        <label htmlFor="text" className={css.label}>
          <span className={css.spanLabel}>*</span>Leave a comment
        </label>
        <textarea
          className={`${css.input} ${css.textarea}`}
          type="text"
          placeholder="Type here"
          name="text"
          maxLength="255"
          value={formData.text}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.wrapperInput}>
        <label htmlFor="rating" className={css.label}>
          <span className={css.spanLabel}>*</span>Rate us
        </label>
        <select
          name="rating"
          className={css.select}
          value={formData.rating}
          onChange={handleChange}
          required
        >
          <option value="defaultOption" disabled>
            Choose here...
          </option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <button className={css.button} type="submit">
        Leave Review
      </button>
    </form>
  );
};

export default FormAddReviews;
