import React from 'react';
import Link from 'next/link';
import css from './MenuAdmin.module.css';

const items = [{ id: '1', title: 'Reviews Management', link: '#' }];

const MenuAdmin = () => {
  return (
    <ul>
      {items.map(({ id, title, link }) => {
        return (
          <li key={id}>
            <Link className={css.linkItem} href={link}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuAdmin;
