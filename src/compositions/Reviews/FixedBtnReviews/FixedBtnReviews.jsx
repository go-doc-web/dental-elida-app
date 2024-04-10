import { useState } from 'react';
import { TfiWrite } from 'react-icons/tfi';
import useViewportWidth from '@/hooks/useViewportWidth';
import css from './FixedBtnReviews.module.css';

const FixedBtnReviews = ({ onClick }) => {
  const { isEqualWidth } = useViewportWidth({ expect: 1139 });
  const [isShowBtn, setIsShowBtn] = useState(false);
  return (
    <div className={css.wrapperBtn}>
      <button onClick={onClick} type="button" className={css.fixedButton}>
        <TfiWrite />
        <span>Write Review</span>
      </button>
    </div>
  );
};

export default FixedBtnReviews;
