import { useState, useEffect } from 'react';

import css from './FixedBtnReviews.module.css';

const FixedBtnReviews = ({ onClick }) => {
  const [isSticky, setSticky] = useState(false);

  const checkScroll = () => {
    if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight - 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  return (
    <button
      onClick={onClick}
      type="button"
      className={css.fixedButton}
      style={{
        position: isSticky ? 'absolute' : 'fixed',
        bottom: '20px',
        // width: isSticky ? '100%' : 'calc(100% - 2rem)',
        width: 'calc(100% - 2rem)',
      }}
    >
      <span>Write Review</span>
    </button>
  );
};

export default FixedBtnReviews;
