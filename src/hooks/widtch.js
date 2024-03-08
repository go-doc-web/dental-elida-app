import { useEffect, useState } from 'react';

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    // Функция обновления ширины вьюпорта
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Инициализация значения при загрузке компонента
    handleResize();

    // Добавление слушателя события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Удаление слушателя при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Пустой массив зависимостей означает, что useEffect будет запущен только после монтирования и размонтирования компонента

  return viewportWidth;
};

export default useViewportWidth;
