import React from 'react';
import css from './AppNotifier.module.css';

const Success = props => {
  const { message = '', onClose } = props;
  return (
    <div onClick={onClose} className={`${css.success} ${css.wrapper}`}>
      {message}
    </div>
  );
};

export default Success;
