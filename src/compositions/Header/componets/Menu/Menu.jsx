'use client';
// import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../../Modal/Modal';

import Hamburger from '@/componets/Icon/Hamburger';
import MenuItem from './MenuItem';
import useViewportWidth from '@/hooks/useViewportWidth';
import { getIsShowBurger } from '@/lib/redux/selectors';
import css from './Menu.module.css';

function Menu({ menuItems }) {
  const dispatch = useDispatch();
  const isShow = useSelector(state => getIsShowBurger(state));

  const openMenu = () => {
    dispatch({ type: 'open-close/burger', payload: true });
  };
  const closeMenu = () => {
    dispatch({ type: 'open-close/burger', payload: false });
  };
  const login = () => {
    dispatch({ type: 'login/auth', payload: true });
  };
  const logout = () => {
    dispatch({ type: 'logout/auth', payload: false });
  };

  const { isEqualWidth } = useViewportWidth({ expect: 768 });
  return (
    <nav className={css.nav}>
      {isShow && (
        <Modal closeModal={closeMenu}>
          {
            <>
              {/* <p style={{ marginBottom: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, nisi. Odit
                recusandae ipsam, ratione doloremque vero architecto iusto iure ea est non libero
                quas quae, sapiente, eum numquam porro asperiores.
              </p> */}
              <button
                onClick={login}
                style={{
                  background: 'tomato',
                  color: 'white',
                  padding: '6px 12px',
                  marginRight: '10px',
                }}
              >
                login
              </button>
              <button
                onClick={logout}
                style={{ background: 'teal', color: 'white', padding: '6px 12px' }}
              >
                Logout
              </button>
            </>
          }
        </Modal>
      )}

      {isEqualWidth && (
        <button onClick={openMenu} type="button">
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
