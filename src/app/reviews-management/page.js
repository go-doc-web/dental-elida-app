'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

function ReviewsManagement() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let key = localStorage.getItem('active');

    setIsLoggedIn(key);
  }, []);

  if (!isLoggedIn) {
    return <h1>You are not authorized to access this page.</h1>;
  }

  return (
    <div>
      <h1>Welcome, Admin!</h1>
    </div>
  );
}

export default ReviewsManagement;
