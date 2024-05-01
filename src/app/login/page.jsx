'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import css from './Auth.module.css';
import LoginForm from './LoginForm';

const Login = () => {
  const route = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const active = localStorage.getItem('isActive');
    if (active) {
      setLoading(true);
      route.push('/reviews-management');
      setLoading(false);
    }
  }, [route]);

  return (
    <>
      <div className={css.page}>
        {loading && <p>Loading...</p>}
        {!loading && (
          <div className={css.wrapper}>
            <LoginForm />
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
