/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const DontDelay = ({ spanFirst, middleText, spanSecond, endText }) => {
  return (
    <p className="dont-delay">
      <span className="dont-delay-first">{spanFirst}</span> {middleText}{' '}
      <span className="dont-delay-second">{spanSecond}</span> {endText}
    </p>
  );
};

export default DontDelay;
