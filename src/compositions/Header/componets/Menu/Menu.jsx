'use client';
import { useState, useEffect } from 'react';

import Hamburger from '@/componets/Icon/Hamburger';
import MenuItem from './MenuItem';
import BurgerMenu from '@/componets/BurgerMenu';
import useViewportWidth from '@/hooks/useViewportWidth';

import css from './Menu.module.css';

function Menu({ menuItems }) {
  const { isEqualWidth } = useViewportWidth({ expect: 1140 });
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuItemsState, setMenuItemsState] = useState([]);

  useEffect(() => {
    setIsMenuVisible(true); // Показываем меню после определения ширины экрана
    const isActive = localStorage.getItem('isActive');

    if (!isActive) {
      setMenuItemsState([...menuItems]);
    }

    if (isActive) {
      setMenuItemsState([
        ...menuItems,
        {
          id: '5',
          title: 'Reviews Management',
          link: '/reviews-management',
        },
      ]);
    }
  }, [menuItems]);

  return (
    <nav className={css.nav}>
      {isMenuVisible && (
        <>
          {isEqualWidth ? (
            <BurgerMenu />
          ) : (
            <ul className={css.navList}>
              {menuItemsState.map((item, index) => {
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
