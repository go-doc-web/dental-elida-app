'use client';

import css from './Auth.module.css';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <div className={css.wrapper}>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
