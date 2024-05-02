'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import css from './Auth.module.css';
import LoginForm from './LoginForm';

const Login = () => {
  const route = useRouter();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const active = localStorage.getItem('isActive');
    if (active) {
      setIsActive(true);

      route.push('/reviews-management');
    }
  }, [route, isActive]);

  return (
    <>
      {!isActive && (
        <div className={css.page}>
          <div className={css.wrapper}>
            <LoginForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
