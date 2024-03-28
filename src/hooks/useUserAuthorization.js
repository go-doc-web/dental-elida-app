'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export const useUserAuthorization = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const isActive = localStorage.getItem('isActive');

  useEffect(() => {
    if (isActive) {
      dispatch(getUserProfile({ router }));
    }
  }, []);
};
