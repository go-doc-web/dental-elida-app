import { api } from '../api';

export default ({ email, password }) =>
  async dispatch => {
    try {
      const request = await api.post('/auth/login', { email, password });
      const response = request?.data;

      console.log('response', response);

      if (response?.status === 200 && response?.token) {
        console.log('if...');
        localStorage.setItem('token', response?.token);
        return response.token;
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
