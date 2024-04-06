import React, { useState } from 'react';
import Link from 'next/link';
import { menuItems } from '@/config/navMenu';
import Hamburger from '@/componets/Icon/Hamburger';

import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('menuItems', menuItems);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" onClick={openMenu}>
        <Hamburger color={'white'} />
      </button>
      <div className={isOpen ? `${css.menu} ${css.open}` : css.menu}>
        <button className={css.btnClose} type="button" onClick={closeMenu}>
          X
        </button>

        <ul className={css.navList}>
          {menuItems.map(item => {
            return (
              <li key={item.id}>
                <Link className={css.itemLink} href={item.link}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
