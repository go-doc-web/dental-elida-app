'use client';
import React, { useState } from 'react';
import { Select, Space } from 'antd';

import css from './FormAddReviews.module.css';

const FormAddReviews = () => {
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
        {/* <Space wrap>
          <Select
            defaultValue="lucy"
            style={{ width: 260 }}
            name={'rating'}
            onChange={handleChange}
            options={[
              { value: '1', label: '1 Star' },
              { value: '2', label: '2 Star' },
              { value: '3', label: '3 Star' },
              { value: '4', label: '4 Star' },
              { value: '5', label: '5 Star' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </Space> */}
      </div>
      <button className={css.button} type="submit">
        Leave Review
      </button>
    </form>
  );
};

export default FormAddReviews;
