'use client';
import clsx from 'clsx';

import Menu from './componets/Menu';
import AddressPanel from './componets/AddressPanel';

import * as menu from '@/config/navMenu';
import css from './Header.module.css';

const cn = clsx;

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <div className="container">
          <div className={css.wrapperMenu}>
            <Menu menu={menu.mainMenu} />
            <AddressPanel />
          </div>
        </div>

        {/*  сделать компонентом */}
      </header>
    </>
  );
};

export default Header;
