// 'use client';
import { api } from '../api';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ email, password }) =>
  async dispatch => {
    try {
      const request = await api.post('/auth/login', { email, password });
      const response = request?.data;

      if (response?.status === 200 && response?.token) {
        localStorage.setItem('token', response?.token);
        return response.token;
      }

      if (response?.logout) {
        localStorage.setItem('isActive', false);
        localStorage.removeItem('token');
      }
      if (response?.status === 401) {
        dispatch({
          type: 'SET_APP_NOTIFIER',
          message: response?.message,
          key: 'error',
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'SET_APP_NOTIFIER',
        message: response?.message,
        key: 'error',
      });
    }
  };
