'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './AppNotifier.module.css';

import Success from './Success';
import Error from './Error';

const render = {
  success: Success,
  error: Error,
};

const AppNotifier = () => {
  const dispatch = useDispatch();

  const { key, message } = useSelector(state => state.appNotifier);

  const onClose = () => {
    dispatch({ type: 'CLOSE_APP_NOTIFIER' });
  };

  // useEffect(() => {
  //   let timer = null;
  //   if (message) {
  //     timer = setTimeout(() => {
  //       onClose();
  //     }, 3000);
  //   }

  //   return () => clearTimeout(timer);
  // }, [message]); // eslint-disable-line

  return (
    message && (
      <div className={css.appNotifier}>
        <div className={css.notify}>{render[key]({ message, onClose })}</div>
      </div>
    )
  );
};

export default AppNotifier;
