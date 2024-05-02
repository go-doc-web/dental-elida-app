'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import css from './Auth.module.css';
import LoginForm from './LoginForm';

const Login = () => {
  const route = useRouter();
  // const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // setLoading(true);
    const active = localStorage.getItem('isActive');
    if (active) {
      setIsActive(true);
      route.push('/reviews-management');
      // setLoading(false);
    }
  }, [route, isActive]);

  return (
    <>
      {/* {loading} && <p>Loading</p> */}
      {!isActive && (
        <div className={css.page}>
          <div className={css.wrapper}>
            <LoginForm />
          </div>
        </div>
      )}

      {/* {loading && <p>Loading...</p>}
      <div className={css.page}>
        {!isActive && (
          <div className={css.wrapper}>
            <LoginForm />
          </div>
        )}
      </div> */}
    </>
  );
};

export default Login;
