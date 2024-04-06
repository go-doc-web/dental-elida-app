'use client';
import { useState } from 'react';

import Hamburger from '@/componets/Icon/Hamburger';
import MenuItem from './MenuItem';
import BurgerMenu from '@/componets/BurgerMenu';
import useViewportWidth from '@/hooks/useViewportWidth';

import css from './Menu.module.css';

function Menu({ menuItems }) {
  const { isEqualWidth } = useViewportWidth({ expect: 1140 });
  return (
    <>
      <nav className={css.nav}>
        {isEqualWidth && <BurgerMenu />}
        {!isEqualWidth && (
          <ul className={css.navList}>
            {menuItems.map(item => {
              return <MenuItem key={item.id} item={item} />;
            })}
          </ul>
        )}
      </nav>
    </>
  );
}

export default Menu;
