'use client';
import React from 'react';
import Link from 'next/link';

import Hamburger from '@/componets/Icon/Hamburger';
import useViewportWidth from '@/hooks/useViewportWidth';
import css from './Menu.module.css';

function Menu({ menu }) {
  const { isEqualWidth } = useViewportWidth({ expect: 768 });
  return (
    <nav className={css.nav}>
      {isEqualWidth && (
        <button onClick={() => console.log('Hello')} type="button">
          <Hamburger color={'white'} />
        </button>
      )}
      {!isEqualWidth && (
        <ul className={css.navList}>
          {menu.map(({ id, title, link }) => {
            return (
              <li key={id} className={css.linkItem}>
                <Link href={link}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Menu;
