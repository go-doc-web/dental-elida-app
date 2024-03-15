import { useState } from 'react';
import css from './LoginForm.module.css';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

// import axios from 'axios';
import { authorization } from '@/api/request';

const initialState = {
  email: '',
  password: '',
};

export // TODO Сделать валидацию на сервере или на клиенте email и password

const LoginForm = () => {
  const route = useRouter();
  const [state, setState] = useState({ ...initialState });
  const [messageError, setMessageError] = useState('');

  const dispatch = useDispatch();
  // dispatch('auth/login', { ...state });

  const handleChange = ({ target }) => {
    setMessageError('');
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const resetForm = () => {
    setState({ ...initialState });
  };

  const loginUser = (email, password) => async dispatch => {
    try {
      const response = await authorization({ email, password });
      const res = response.data;

      if (res.status === 200) {
        const { token } = res.data;

        localStorage.setItem('active', Boolean(token));
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        route.push('/reviews-management');
      }

      if (res.status === 401) {
        dispatch({ type: 'LOGIN_ERROR', payload: res.message });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = state;

    dispatch(loginUser(email, password));
    // try {
    //   const response = await authorization({ email, password });
    //   const res = response.data;
    //   console.log(res.data);

    //   if (res.status === 200) {
    //     const { token } = res.data;
    //     dispatch('auth/login', res.data);
    //     localStorage.setItem('active', Boolean(token));
    //     resetForm();
    //     route.push('/reviews-management');
    //   }

    //   if (res.status === 401) {
    //     setMessageError(res.message);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

    // onSubmit(res);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.wrap}>
        <label className={css.label}>
          Email:
          <input
            className={css.input}
            type="text"
            placeholder="Enter email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={css.wrap}>
        <label className={css.label}>
          Password:
          <input
            className={css.input}
            type="text"
            placeholder="Enter login"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
      </div>
      {messageError && <span className={css.messageError}>{messageError}</span>}

      <button className={css.btn} type="submit">
        SignIn{' '}
      </button>
    </form>
  );
};

export default LoginForm;
