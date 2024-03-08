import React from 'react';

export default function Hamburger({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M4 12H20" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M4 18H20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
