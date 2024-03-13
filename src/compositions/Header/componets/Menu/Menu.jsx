'use client';
import { useState } from 'react';

import Hamburger from '@/componets/Icon/Hamburger';
import MenuItem from './MenuItem';
import useViewportWidth from '@/hooks/useViewportWidth';

import css from './Menu.module.css';

function Menu({ menuItems }) {
  const { isEqualWidth } = useViewportWidth({ expect: 768 });
  return (
    <nav className={css.nav}>
      {isEqualWidth && (
        <button type="button">
          <Hamburger color={'white'} />
        </button>
      )}
      {!isEqualWidth && (
        <ul className={css.navList}>
          {menuItems.map(item => {
            return (
              <MenuItem key={item.id} item={item} />
              // <li key={item.id} className={css.linkItem}>
              //   <Link href={item.link}>{item.title}</Link>
              // </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Menu;
