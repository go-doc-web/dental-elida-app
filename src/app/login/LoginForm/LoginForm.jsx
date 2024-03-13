import { useState } from 'react';
import css from './LoginForm.module.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const initialState = {
  email: '',
  password: '',
};

// TODO Сделать валидацию на сервере или на клиенте email и password

const LoginForm = () => {
  const route = useRouter();
  const [state, setState] = useState({ ...initialState });
  const [messageError, setMessageError] = useState('');

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

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = state;
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const res = response.data;
      if (res.status === 401) {
        setMessageError(res.message);
      }

      if (res.status === 200) {
        const { isActivated } = res.data;

        localStorage.setItem('active', isActivated);
        resetForm();
        route.push('/reviews-management');
      }
    } catch (error) {
      console.error(error);
    }

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
