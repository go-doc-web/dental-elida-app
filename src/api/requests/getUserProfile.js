'use client';
import { api } from '../api';
// import * as routes from '@/constants/routes';

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

      if (response?.status === 200) {
        localStorage.setItem('isActive', true);
        const data = response?.data || {};
        dispatch({ type: 'SET_USER_PROFILE', payload: data });
      }

      if (response?.logout) {
        localStorage.removeItem('isActive');
        localStorage.removeItem('token');
        router.push('/login');
      }

      if (response?.status === 401) {
        dispatch({
          type: 'SET_APP_NOTIFIER',
          message: response?.message,
          key: 'error',
        });
        if (response?.logout) {
          localStorage.removeItem('isActive');
          localStorage.removeItem('token');
          router.push('/login');
        }
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

// dispatch({ type: 'SET_USER_STATUS', payload: localStorage.getItem('isActive') });

// const isPrivateLocation = routes.memberAria.includes(location);
// console.log('isPrivateLocation', isPrivateLocation);

// if (!isPrivateLocation) {
//   router.push('/reviews-management');
// }
