'use client';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import Hamburger from '@/componets/Icon/Hamburger';
import MenuItem from './MenuItem';
import BurgerMenu from '@/componets/BurgerMenu';
import useViewportWidth from '@/hooks/useViewportWidth';

import css from './Menu.module.css';

function Menu({ menuItems }) {
  const { isEqualWidth } = useViewportWidth({ expect: 1140 });
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    setIsMenuVisible(true); // Показываем меню после определения ширины экрана
  }, []);

  return (
    <nav className={css.nav}>
      {isMenuVisible && (
        <>
          {isEqualWidth ? (
            <BurgerMenu />
          ) : (
            <ul className={css.navList}>
              {menuItems.map(item => {
                return <MenuItem key={item.id} item={item} />;
              })}
            </ul>
          )}
        </>
      )}
    </nav>
  );
}

export default Menu;
