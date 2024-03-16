'use client';
import { useSelector, useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import Menu from './componets/Menu';
import MenuAdmin from './componets/MenuAdmin/MenuAdmin';
import AddressPanel from './componets/AddressPanel';

import { menuItems } from '@/config/navMenu';
import css from './Header.module.css';

// const cn = clsx;

const Header = () => {
  // const isActive = useSelector(state => state.isActive);
  const pathname = usePathname();
  const path = pathname === '/reviews-management';

  return (
    <>
      <header className={css.header}>
        <div className="container">
          <div className={css.wrapperMenu}>
            {path && <MenuAdmin />}
            {!path && <Menu menuItems={menuItems} />}
            {path && <h1 className={css.titleAdminPanel}>Elida Dental Group</h1>}
            {!path && <AddressPanel />}
            {/* <AddressPanel /> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
