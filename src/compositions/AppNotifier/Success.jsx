import React from 'react';
import css from './AppNotifier.module.css';

const Success = props => {
  const { message = '', onClose } = props;
  return (
    <div onClick={onClose} className={`${css.success} ${css.wrapper}`}>
      <div></div>
      {message}
    </div>
  );
};

export default Success;
