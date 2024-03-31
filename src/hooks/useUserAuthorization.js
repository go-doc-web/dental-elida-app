// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useDispatch } from 'react-redux';

// import getUserProfile from '@/api/requests/getUserProfile';

// export const useUserAuthorization = () => {
//   const router = useRouter();
//   const dispatch = useDispatch();

//   // const token = localStorage.getItem('token');
//   const isActive = localStorage.getItem('isActive');
//   console.log('useUserAuthorization', isActive);

//   useEffect(() => {
//     if (isActive) {
//       dispatch(getUserProfile({ router }));
//     }
//   }, []);
// };

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import getUserProfile from '@/api/requests/getUserProfile';

export const useUserAuthorization = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  if (typeof window !== 'undefined') {
    // we are brouser
    const isActive = window.localStorage.getItem('isActive');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (isActive) {
        dispatch(getUserProfile({ router }));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  } else {
    // we are server componets
    // console.log('server');
  }
};
