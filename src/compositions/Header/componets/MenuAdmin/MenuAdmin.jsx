'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import css from './MenuAdmin.module.css';

const items = [
  { id: '1', title: 'Home', link: '/' },
  { id: '2', title: 'Reviews Management', link: '/reviews-management' },
];

const MenuAdmin = () => {
  const pathname = usePathname();
  console.log('pathname', pathname);
  return (
    <ul className={css.menuAdminList}>
      {items.map(({ id, title, link }) => {
        return (
          <li className={css.menuAdminLink} key={id}>
            <a className={css.linkItem} href={link}>
              {title}
            </a>
            {pathname === link ? <div className={css.activeMenu}></div> : null}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuAdmin;
