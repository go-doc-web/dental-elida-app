import { useState } from 'react';
import css from './LoginForm.module.css';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import postLogin from '@/api/requests/postLogin';
import getUserProfile from '@/api/requests/getUserProfile';

const initialState = {
  email: '',
  password: '',
};

export // TODO Сделать валидацию на сервере или на клиенте email и password

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });
  const [errorMessage, setErrorMessage] = useState('');

  const message = useSelector(s => s.auth.error);

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

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = state;

    dispatch(postLogin({ email, password })).then(token => {
      console.log('token', token);
      if (token) {
        dispatch(getUserProfile({ router }));
      }
    });
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
