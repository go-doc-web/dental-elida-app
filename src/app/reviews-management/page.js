'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

function ReviewsManagement() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let key = localStorage.getItem('active');
    if (!key) {
      router.push('/login');
    }

    setIsLoggedIn(key);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // if (!isLoggedIn) {
  //   return <h1>You are not authorized to access this page.</h1>;
  // }

  return (
    <>
      {!isLoggedIn && <h1>You are not authorized to access this page.</h1>}
      {isLoggedIn && (
        <div>
          <h1>Welcome, Admin!</h1>
        </div>
      )}
    </>
  );
}

export default ReviewsManagement;
