import React, { useState } from 'react';

export const useBurgerState = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openMenu = () => {
    setIsOpen(true);
    document.body.classList.add('burgerOpen');
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('burgerOpen');
  };

  return { isOpen, openMenu, closeMenu };
};
