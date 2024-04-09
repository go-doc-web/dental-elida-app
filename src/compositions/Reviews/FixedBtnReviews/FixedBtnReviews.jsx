import { useState } from 'react';
import css from './FixedBtnReviews.module.css';

const FixedBtnReviews = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} type="button" className={css.fixedButton}>
        Write Review
      </button>
    </div>
  );
};

export default FixedBtnReviews;
