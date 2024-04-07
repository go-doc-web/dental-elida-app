import React from 'react';
import css from './AppNotifier.module.css';

const Error = props => {
  const { message = '' } = props;
  return <div className={`${css.error} ${css.wrapper}`}>{message}</div>;
};

export default Error;
