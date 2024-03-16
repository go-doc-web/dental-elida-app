'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import css from './Auth.module.css';
import LoginForm from './LoginForm';

const Login = () => {
  const route = useRouter();

  useEffect(() => {
    const active = localStorage.getItem('active');
    if (active) {
      route.push('/reviews-management');
    }
  }, [route]);

  return (
    <>
      <div className={css.wrapper}>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
