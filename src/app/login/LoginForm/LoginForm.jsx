import { useState } from 'react';
import css from './LoginForm.module.css';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

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
  const [errorMessage, setErrorMessage] = useState('');

  const message = useSelector(s => s.auth.error);

  const dispatch = useDispatch();
  // dispatch('auth/login', { ...state });

  const resetForm = () => {
    setState({ ...initialState });
  };

  const handleChange = ({ target }) => {
    setErrorMessage('');
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const loginUser = (email, password) => async dispatch => {
    try {
      const response = await authorization({ email, password });
      console.log('response.data', response.data);
      const res = response;

      if (response.status === 200) {
        const { token } = response.data;

        localStorage.setItem('active', Boolean(token));
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        route.push('/reviews-management');
      }

      if (res.status === 401) {
        dispatch({ type: 'LOGIN_ERROR', payload: res.message });
        setErrorMessage(message);
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      setErrorMessage(message);
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
      {errorMessage && <span className={css.messageError}>{errorMessage}</span>}

      <button className={css.btn} type="submit">
        SignIn{' '}
      </button>
    </form>
  );
};

export default LoginForm;
