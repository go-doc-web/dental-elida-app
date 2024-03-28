'use client';
import { api } from '../api';

export default ({ router }) =>
  async dispatch => {
    const token = localStorage.getItem('token');
    try {
      //TODO refactor endpoint url
      const request = await api.post('/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          token,
        },
      });

      console.log('request', request);

      const response = request?.data;

      if (response?.status === 200) {
        localStorage.setItem('isActive', true);
        const data = response?.data || {};
        dispatch({ type: 'SET_USER_PROFILE', payload: data });
        router.push('/reviews-management');
      }

      if (response?.logout) {
        localStorage.setItem('isActive', false);
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
