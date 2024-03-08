import React from 'react';
import Link from 'next/link';

import css from './Menu.module.css';

function Menu({ menu }) {
  return (
    <nav>
      <ul className={css.navList}>
        {menu.map(({ id, title, link }) => (
          <li key={id} className={css.linkItem}>
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
