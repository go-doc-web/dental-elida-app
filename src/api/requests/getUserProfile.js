'use client';
import { api } from '../api';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ router }) =>
  async dispatch => {
    const token = localStorage.getItem('token');
    try {
      //TODO refactor endpoint url
      const request = await api.post('/user', {
        token,
      });

      const response = request?.data;
      console.log('responseresponse', response);

      if (response?.status === 200) {
        localStorage.setItem('isActive', true);
        const data = response?.data || {};
        dispatch({ type: 'SET_USER_PROFILE', payload: data });
        dispatch({ type: 'SET_USER_STATUS', payload: localStorage.getItem('isActive') });
        router.push('/reviews-management');
      }

      if (response?.logout) {
        localStorage.removeItem('isActive');
        localStorage.removeItem('token');
        router.push('/login');
      }
      if (response?.status === 401) {
        dispatch({
          type: 'APP_ERROR',
          payload: {
            notification: response?.message,
            typeNotification: 'error',
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'APP_ERROR',
        payload: {
          notification: response?.message,
          typeNotification: 'error',
        },
      });
    }
  };
