'use client';
import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../../Modal/Modal';

import Hamburger from '@/componets/Icon/Hamburger';
import useViewportWidth from '@/hooks/useViewportWidth';
import { getIsShowBurger } from '@/lib/redux/selectors';
import css from './Menu.module.css';

function Menu({ menu }) {
  const dispatch = useDispatch();
  const isShow = useSelector(state => getIsShowBurger(state));
  const openMenu = () => {
    dispatch({ type: 'open-close/burger', payload: true });
  };
  const closeMenu = () => {
    dispatch({ type: 'open-close/burger', payload: false });
  };

  const { isEqualWidth } = useViewportWidth({ expect: 768 });
  return (
    <nav className={css.nav}>
      {isShow && (
        <Modal closeModal={closeMenu}>
          {
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, nisi. Odit recusandae
              ipsam, ratione doloremque vero architecto iusto iure ea est non libero quas quae,
              sapiente, eum numquam porro asperiores.
            </p>
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
