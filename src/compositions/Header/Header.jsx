'use client';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './componets/Menu';
import AddressPanel from './componets/AddressPanel';

import { menuItems } from '@/config/navMenu';
import css from './Header.module.css';

// const cn = clsx;

const Header = () => {
  const isActive = useSelector(state => state.isActive);
  return (
    <>
      <header className={css.header}>
        <div className="container">
          <div className={css.wrapperMenu}>
            <Menu menuItems={menuItems} />

            <AddressPanel />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
