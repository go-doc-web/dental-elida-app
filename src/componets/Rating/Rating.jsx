import React from 'react';

const Rating = ({ value }) => {
  // Ограничиваем значение от 1 до 5
  const ratingValue = Math.max(1, Math.min(5, value));

  // Создаем массив звезд в зависимости от значения рейтинга
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
      >
        <path
          d="M8.25365 0L9.98965 5.348H15.612L11.0648 8.652L12.8008 14L8.25365 10.696L3.70085 14L5.43685 8.652L0.889648 5.348H6.51205L8.25365 0Z"
          // fill="#FC4303"
          fill={`${index < ratingValue ? '#FC4303' : 'gray'} `}
        />
      </svg>
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

export default Rating;
