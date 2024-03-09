import { useEffect, useState } from 'react';

const useViewportWidth = ({ expect = 0 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isEqualWidth = width <= expect;

  return { width, isEqualWidth };
};

export default useViewportWidth;
