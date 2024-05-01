import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import LoaderCircle from '@/componets/LoaderCircle';
import postLogin from '@/api/requests/postLogin';
import getUserProfile from '@/api/requests/getUserProfile';
import css from './LoginForm.module.css';
const initialState = {
  email: '',
  password: '',
};

// TODO Сделать валидацию на сервере или на клиенте email и password

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const message = useSelector(s => s.auth.error);

  const resetForm = () => {
    setState({ ...initialState });
  };

  const validateInput = (name, value) => {
    let error = '';

    if (name === 'email' && !value.trim()) {
      error = 'Email  is required';
    }
    if (name === 'password' && !value.trim()) {
      error = 'Password is required';
    }
    setValidationErrors(prevState => ({
      ...prevState,
      [name]: error,
    }));
  };

  const handleChange = ({ target }) => {
    setErrorMessage('');

    const { name, value } = target;
    validateInput(name, value);
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!state.email.trim() || !state.password.trim()) {
      setErrorMessage('Please fill out all required fields');
      return;
    }
    if (Object.values(validationErrors).some(error => error)) {
      setErrorMessage('Please fill out all required fields');
      return;
    }
    setLoading(true);
    const { email, password } = state;

    dispatch(postLogin({ email, password }))
      .then(token => {
        if (token) {
          dispatch(getUserProfile({ router })).then(() => {
            const isActive = localStorage.getItem('isActive');
            if (isActive) {
              router.push('/reviews-management');
            }
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.wrap}>
        <label className={css.label}>
          Email:
          <input
            className={`${css.input} ${validationErrors?.email ? css.errorInput : ''}`}
            type="email"
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
            className={`${css.input} ${validationErrors?.password ? css.errorInput : ''}`}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
      </div>
      {errorMessage && <span className={css.messageError}>{errorMessage}</span>}
      <button className={css.btn} type="submit">
        {loading ? <LoaderCircle /> : 'Sign In'}
      </button>
    </form>
  );
};

export default LoginForm;
